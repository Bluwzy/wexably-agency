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

    // --- Internal Notification (to you) ---
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

    // Send internal notification to you
    let info = await transporter.sendMail(mailOptions);
    console.log('✅ Email notification sent successfully via Brevo to:', mailOptions.to);
    console.log('📧 Brevo Message ID:', info.messageId);

    // --- Auto-reply to client ---
    await transporter.sendMail({
      from: `"${process.env.AUTO_REPLY_NAME}" <${process.env.AUTO_REPLY_EMAIL}>`, // from .env
      to: formData.email, // client’s email
      subject: "We received your message at Wexably 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f9f9f9; padding: 20px; border-radius: 10px; border: 1px solid #eee;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #2c3e50;">Wexably Agency</h2>
          </div>
          <p style="font-size: 16px; color: #333;">Hi <b>${formData.name}</b>,</p>
          <p style="font-size: 15px; color: #555;">
            Thanks for reaching out to <b>Wexably</b> 🚀.  
            We’ve received your message and our team will get back to you within <b>24 hours</b>.
          </p>
          <p style="margin-top: 20px; font-size: 14px; color: #444;">Here’s a copy of your message for reference:</p>
          <blockquote style="border-left: 4px solid #4CAF50; padding-left: 10px; color: #555; margin: 10px 0;">
            ${formData.message}
          </blockquote>
          <br>
          <p style="font-size: 15px; color: #333;">Best regards,</p>
          <p style="font-weight: bold; font-size: 15px; color: #2c3e50;">Wexably Agency Team</p>
          <hr style="margin: 25px 0; border: none; border-top: 1px solid #ddd;"/>
          <p style="font-size: 12px; color: #999; text-align: center;">
            This is an automated email from Wexably Agency. Please do not reply directly.  
            Visit <a href="https://wexably.com" style="color: #4CAF50; text-decoration: none;">wexably.com</a> for more.
          </p>
        </div>
      `
    });
    console.log(`✅ Auto-reply sent successfully to ${formData.email}`);

    return info;

  } catch (error) {
    console.error('❌ Error sending email with Brevo:', error.message);
    throw error;
  }
};

module.exports = { sendContactNotification };
