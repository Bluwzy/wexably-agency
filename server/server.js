const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { sendContactNotification } = require('./utils/emailService');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/wexably');
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error(`Error connecting to MongoDB: ${error}`);
});

// Initialize Express app
const app = express();

// Middleware
const allowedOrigins = [process.env.CLIENT_URL, 'http://localhost:3000']; // Add your Netlify URL and localhost
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());

// Routes
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Welcome to Wexably API!' });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy!' });
});

// CONTACT FORM ENDPOINT - THIS IS WHAT YOU NEED
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Contact form data received:', req.body);
    
    const { name, email, company, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }
    
    // For now, just log the data until we set up the database model
    console.log('Form submission:', { name, email, company, message });
    
    // Try to send email notification
    try {
      await sendContactNotification({ name, email, company, message });
      console.log('Email notification sent');
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Don't fail the request if email fails
    }
    
    res.status(200).json({ 
      success: true,
      message: 'Contact form submitted successfully' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Internal server error' 
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});