const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const path = require('path'); // ADD THIS LINE
const { sendContactNotification } = require('./utils/emailService');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/wexably', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error(`❌ Error connecting to MongoDB: ${error}`);
});

// Initialize Express app
const app = express();

// ========================
// 🛡️ PRACTICAL SECURITY MIDDLEWARE
// ========================

// 1. Safe Helmet configuration (won't break your app)
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP to avoid conflicts
  crossOriginEmbedderPolicy: false
}));

// 2. Manual security headers (safe and reliable)
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

// 3. Rate Limiting - PREVENTS BRUTE FORCE ATTACKS
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 contact requests per windowMs
  message: {
    success: false,
    error: 'Too many contact attempts from this IP. Please try again in 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // General API limit
  message: {
    success: false,
    error: 'Too many requests from this IP. Please try again later.'
  }
});

// 4. CORS - PREVENTS UNAUTHORIZED DOMAIN ACCESS
const allowedOrigins = [
  process.env.CLIENT_URL, 
  'http://localhost:3000',
  'https://wexably-agency.netlify.app'
].filter(origin => origin);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      console.warn('🚨 CORS violation attempt from:', origin);
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// 5. Request size limits - PREVENTS LARGE PAYLOAD ATTACKS
app.use(express.json({ 
  limit: '1mb' // Prevent large payload attacks
}));

app.use(express.urlencoded({ 
  extended: true, 
  limit: '1mb'
}));

// ========================
// 🛡️ MANUAL INPUT SANITIZATION (SAFE & EFFECTIVE)
// ========================

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  // Remove potential XSS vectors
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/<\/?[^>]+(>|$)/g, '') // Remove HTML tags
    .replace(/'/g, "''") // Escape single quotes for SQL safety
    .trim();
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ========================
// REQUEST LOGGING
// ========================
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - IP: ${req.ip}`);
  next();
});

// Apply general rate limiting to all API routes
app.use('/api/', generalLimiter);

// ========================
// ROUTES
// ========================

// Health check
app.get('/api', (req, res) => {
  res.status(200).json({ 
    success: true,
    message: 'Welcome to Wexably API!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    success: true,
    message: 'Server is healthy!',
    timestamp: new Date().toISOString()
  });
});

// 🛡️ SECURE CONTACT FORM ENDPOINT
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    console.log('📧 Contact form data received');
    
    let { name, email, company, message } = req.body;
    
    // 🛡️ INPUT VALIDATION
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        error: 'Name, email, and message are required' 
      });
    }
    
    // 🛡️ MANUAL SANITIZATION
    name = sanitizeInput(name);
    email = sanitizeInput(email);
    company = company ? sanitizeInput(company) : '';
    message = sanitizeInput(message);
    
    // 🛡️ ADDITIONAL VALIDATION
    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }
    
    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({
        success: false,
        error: 'Name must be between 2 and 100 characters'
      });
    }
    
    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Message must be at least 10 characters long'
      });
    }
    
    if (message.length > 2000) {
      return res.status(400).json({
        success: false,
        error: 'Message must be less than 2000 characters'
      });
    }
    
    // 🛡️ BASIC SPAM DETECTION
    const spamPatterns = [
      /http(s)?:\/\//i, // URLs
      /[A-Z]{10,}/, // Excessive capitals
      /\!{5,}/, // Multiple exclamation marks
      /viagra|cialis|casino/g // Common spam keywords
    ];
    
    const isPotentialSpam = spamPatterns.some(pattern => 
      pattern.test(message.toLowerCase())
    );
    
    if (isPotentialSpam) {
      console.warn('🚨 Potential spam message detected from:', email.substring(0, 5) + '...');
      // Still process but log it
    }
    
    // 🛡️ SECURE LOGGING (no sensitive data exposure)
    console.log('✅ Form submission processed:', { 
      name: name.substring(0, 3) + '...', 
      email: email.substring(0, 5) + '...',
      company: company ? 'Provided' : 'Not provided',
      messageLength: message.length,
      isPotentialSpam
    });
    
    // Try to send email notification with timeout
    try {
      const emailPromise = sendContactNotification({ name, email, company, message });
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email timeout')), 10000)
      );
      
      await Promise.race([emailPromise, timeoutPromise]);
      console.log('✅ Email notification sent successfully');
    } catch (emailError) {
      console.error('❌ Failed to send email:', emailError.message);
      // Don't fail the request if email fails
    }
    
    res.status(200).json({ 
      success: true,
      message: 'Contact form submitted successfully. We will get back to you within 24 hours.' 
    });
    
  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    // 🛡️ SECURE ERROR HANDLING (no sensitive data exposure)
    const errorMessage = process.env.NODE_ENV === 'production' 
      ? 'Internal server error. Please try again later.'
      : error.message;
    
    res.status(500).json({ 
      success: false,
      error: errorMessage 
    });
  }
});

// ========================
// 🚀 CLIENT-SIDE ROUTING FIX - ADD THIS SECTION
// ========================

// Serve static files from React build (for production)
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React build folder
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  // Handle client-side routing - return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
} else {
  // Development - API 404 handler
  app.use('/api/{*path}', (req, res) => {
    res.status(404).json({ 
      success: false,
      error: 'API endpoint not found' 
    });
  });
}

// ========================
// ERROR HANDLING
// ========================

// Global error handler
app.use((error, req, res, next) => {
  console.error('❌ Unhandled error:', error);
  
  // 🛡️ SECURE ERROR RESPONSES
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).json({ 
      success: false,
      error: 'Internal server error' 
    });
  }
  
  res.status(500).json({ 
    success: false,
    error: error.message
  });
});

// ========================
// GRACEFUL SHUTDOWN
// ========================
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Starting graceful shutdown...');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed.');
      process.exit(0);
    });
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Starting graceful shutdown...');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed.');
      process.exit(0);
    });
  });
});

// ========================
// START SERVER
// ========================
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server started securely on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 CORS enabled for: ${allowedOrigins.join(', ')}`);
  console.log(`🛡️  Security: Rate limiting, CORS, Input sanitization, Secure headers`);
  if (process.env.NODE_ENV === 'production') {
    console.log('📁 Serving React build files for client-side routing');
  }
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Promise Rejection:', err);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;