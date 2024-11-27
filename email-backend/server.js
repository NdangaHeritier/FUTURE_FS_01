require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Initialize express app
const app = express();
const PORT = 5000;

// Use CORS to allow requests from any origin
app.use(cors({
  origin: 'http://localhost:3000',  // Adjust to your frontend URL
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Route for POST requests to send email
app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate input data
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create a transporter using Gmail SMTP server
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address (from .env)
      pass: process.env.EMAIL_PASS, // Your Gmail app password (from .env)
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });

  // Setup email data
  const mailOptions = {
    from: `${name} <${email}>`, // Sender's email
    to: 'ndangahertier@gmail.com', // Replace with the recipient email address
    subject: `New Appointment Request from ${name}`,
    html: `
      <div style="padding: 20px; border: 1px solid lightgrey; border-radius: 10px; background-color: #ffff; font-family: sans-serif">
        <h3 style="color: dodgerblue; padding: 20px 0px">You have a new appointment request:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      </div>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Failed to send email. ' + error.message,
      });
    }
    res.status(200).json({ message: 'Appointment request sent successfully!' });
  });
});

// Route for GET requests to send email (less secure, typically not recommended)
app.get('/send-email', (req, res) => {
  const { name, email, phone, message } = req.query;

  // Validate input data from query parameters
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create a transporter using Gmail SMTP server
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address (from .env)
      pass: process.env.EMAIL_PASS, // Your Gmail app password (from .env)
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });

  // Setup email data
  const mailOptions = {
    from: email, // Sender's email
    to: 'recipient@example.com', // Replace with the recipient email address
    subject: `New Appointment Request from ${name}`,
    html: `
      <h3>You have a new appointment request:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Failed to send email. ' + error.message,
      });
    }
    res.status(200).json({ message: 'Appointment request sent successfully!' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
