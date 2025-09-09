// server/utils/emailService.js
const nodemailer = require('nodemailer');

const sendContactNotification = async (formData) => {
  try {
    console.log('Attempting to send email via Brevo...');

    // Create transporter using Brevo's SMTP
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp-relay.brevo.com
      port: process.env.SMTP_PORT, // 587
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.SMTP_USER, // Your Brevo login email
        pass: process.env.SMTP_PASS, // Your Brevo SMTP key
      },
    });

    // Verify connection configuration
    await transporter.verify();
    console.log('Brevo SMTP connection verified successfully');

    // Define mail options (keep your existing HTML and text templates)
    const mailOptions = {
      from: process.env.FROM_EMAIL, // "Wexably Contact Form <hello@wexably.com>"
      to: process.env.TO_EMAIL, // "hello@wexably.com"
      replyTo: formData.email, // The person who filled the form
      subject: `New Website Message from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #374151;">Name:</strong> ${formData.name}</p>
            <p><strong style="color: #374151;">Email:</strong> <a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">${formData.email}</a></p>
            <p><strong style="color: #374151;">Company:</strong> ${formData.company || 'Not provided'}</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This message was sent from the contact form on your website (wexably.com) on ${new Date().toLocaleString()}.</p>
          </div>
        </div>
      `,
      text: `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not provided'}\nMessage:\n${formData.message}`
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log('✅ Email notification sent successfully via Brevo to:', mailOptions.to);
    console.log('📧 Brevo Message ID:', info.messageId);

    return info;

  } catch (error) {
    console.error('❌ Error sending email with Brevo:', error.message);
    throw error;
  }
};

module.exports = { sendContactNotification };