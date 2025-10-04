// server/utils/emailService.js
const nodemailer = require('nodemailer');

const sendContactNotification = async (formData) => {
  try {
    console.log('Attempting to send email via Brevo...');

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();
    console.log('Brevo SMTP connection verified successfully');

    // --- Internal Notification (this works fine) ---
    const mailOptions = {
      from: `"Wexably Contact Form" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      replyTo: formData.email,
      subject: `New inquiry from ${formData.name} - ${formData.company || 'Individual'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Website Inquiry</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #2563eb;">${formData.email}</a></p>
            <p><strong>Company:</strong> ${formData.company || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Submitted via wexably.com contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      `,
      text: `New Website Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\n\nMessage:\n${formData.message}\n\nSubmitted: ${new Date().toLocaleString()}`
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('✅ Internal notification sent successfully');

    // --- SMART Auto-reply that adapts to message content ---
    await transporter.sendMail({
    from: '"Ali from Wexably Agency" <hello@wexably.com>',
    to: formData.email,
    subject: "Thank you for contacting Wexably Agency",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background: #ffffff;">
        
        <div style="margin-bottom: 30px;">
            <h2 style="color: #1f2937; margin: 0; font-size: 24px;">Wexably Agency</h2>
            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Secure Growth Partner for GTA Businesses</p>
        </div>
        
        <p style="font-size: 16px; color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Hi ${formData.name},
        </p>
        
        <p style="font-size: 16px; color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to Wexably Agency${formData.company ? ` regarding ${formData.company}` : ''}. 
            We've received your message and our team will review your inquiry to provide you with the most helpful response.
        </p>
        
        <p style="font-size: 16px; color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Whether you're looking for website security solutions, digital marketing support, or have questions about our services, 
            we'll make sure to address your specific needs and connect you with the right specialist on our team.
        </p>
        
        <p style="font-size: 16px; color: #374151; line-height: 1.6; margin-bottom: 25px;">
            One of our team members will get back to you within 24 hours with a personalized response based on your inquiry. 
            If your matter is urgent, please don't hesitate to call us directly at (289) 335-7376.
        </p>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #3b82f6;">
            <p style="margin: 0 0 10px 0; font-size: 14px; color: #374151;">
            <strong>Your message:</strong>
            </p>
            <p style="margin: 0; font-size: 14px; color: #6b7280; font-style: italic;">
            "${formData.message.length > 200 ? formData.message.substring(0, 200) + '...' : formData.message}"
            </p>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #9ca3af;">
            Received on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
            </p>
        </div>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #0ea5e9;">
            <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">What happens next:</h3>
            <ul style="margin: 0; padding-left: 20px; color: #374151; line-height: 1.6;">
            <li style="margin-bottom: 8px;">Our team will review your specific inquiry and requirements</li>
            <li style="margin-bottom: 8px;">We'll determine the best way to help with your particular needs</li>
            <li style="margin-bottom: 8px;">A specialist will prepare a tailored response for you</li>
            <li style="margin-bottom: 0;">You'll receive a personalized follow-up within 24 hours</li>
            </ul>
        </div>
        
        <div style="margin-top: 40px; padding-top: 25px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0 0 15px 0; color: #374151; font-size: 16px; line-height: 1.4;">
            Best regards,<br>
            <strong style="color: #1f2937;">Ali Arif</strong><br>
            <span style="color: #6b7280; font-size: 14px;">Founder & CEO</span><br>
            <span style="color: #6b7280; font-size: 14px;">Wexably Agency</span>
            </p>
            
            <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 14px; line-height: 1.5;">
            Leading a team of cybersecurity specialists, developers, and digital marketing experts dedicated to helping 
            Toronto-area businesses achieve secure digital growth. With our comprehensive approach, we've helped 
            over 50 businesses protect and scale their online presence.
            </p>
            
            <div style="margin-top: 25px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                <strong>Direct Contact:</strong><br>
                Phone: <a href="tel:+12893357376" style="color: #3b82f6; text-decoration: none;">(289) 335-7376</a><br>
                Email: <a href="mailto:hello@wexably.com" style="color: #3b82f6; text-decoration: none;">hello@wexably.com</a><br>
                Website: <a href="https://wexably.com" style="color: #3b82f6; text-decoration: none;">wexably.com</a><br>
                Service Area: Greater Toronto Area, Ontario
            </p>
            </div>
        </div>
        
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 12px; line-height: 1.4;">
            Wexably Agency - Your Secure Growth Partner<br>
            Mississauga, Ontario, Canada
            </p>
            <p style="margin: 0; color: #9ca3af; font-size: 11px;">
            This email was sent in response to your inquiry via our website.<br>
            <a href="https://wexably.com/privacy" style="color: #9ca3af; text-decoration: underline;">Privacy Policy</a> | 
            <a href="https://wexably.com/unsubscribe" style="color: #9ca3af; text-decoration: underline;">Unsubscribe</a>
            </p>
        </div>
        </div>
    `,
    text: `Hi ${formData.name},

    Thank you for reaching out to Wexably Agency${formData.company ? ` regarding ${formData.company}` : ''}. We've received your message and our team will review your inquiry to provide you with the most helpful response.

    Whether you're looking for website security solutions, digital marketing support, or have questions about our services, we'll make sure to address your specific needs and connect you with the right specialist on our team.

    One of our team members will get back to you within 24 hours with a personalized response based on your inquiry. If your matter is urgent, please don't hesitate to call us directly at (289) 335-7376.

    Your message: "${formData.message}"

    What happens next:
    - Our team will review your specific inquiry and requirements
    - We'll determine the best way to help with your particular needs  
    - A specialist will prepare a tailored response for you
    - You'll receive a personalized follow-up within 24 hours

    Best regards,
    Ali Arif
    Founder & CEO
    Wexably Agency

    Leading a team of cybersecurity specialists, developers, and digital marketing experts dedicated to helping Toronto-area businesses achieve secure digital growth. With our comprehensive approach, we've helped over 50 businesses protect and scale their online presence.

    Phone: (289) 335-7376
    Email: hello@wexably.com
    Website: https://wexably.com
    Service Area: Greater Toronto Area, Ontario

    Wexably Agency - Your Secure Growth Partner`
    });

    
    console.log(`✅ Professional auto-reply sent to ${formData.email}`);
    return info;

  } catch (error) {
    console.error('❌ Error sending email with Brevo:', error.message);
    throw error;
  }
};

module.exports = { sendContactNotification };
