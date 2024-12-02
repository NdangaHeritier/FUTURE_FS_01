// import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
// dotenv.config();

// Export a serverless function
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Validate input data
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create a transporter using Gmail SMTP server
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL_TO, // Recipient email
      subject: `New Appointment Request from ${name}`,
      html: `
        <div style="padding: 20px; border: 1px solid lightgrey; border-radius: 5px; background-color: #dfdf; font-family: sans-serif">
          <h3 style="color: dodgerblue;">You have a new appointment request:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Message:</strong><br>${message}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Appointment request sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
