require('dotenv').config(); // Load environment variables
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from your frontend
app.use(express.json()); // Parse JSON request bodies

// Email Sending Route
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Input Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{10,15}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number format.' });
  }

  // Email Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });

  // Email Content
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender
    to: 'ndangahertier@gmail.com', // Recipient
    subject: `New Appointment Request from ${name}`,
    html: `
      <div style="padding: 20px; font-family: Arial, sans-serif; border: 1px solid lightgray; border-radius: 10px;">
        <h2 style="color: #4CAF50;">New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      </div>
    `,
  };

  try {
    // Send Email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
require('dotenv').config(); // Load environment variables
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from your frontend
app.use(express.json()); // Parse JSON request bodies

// Email Sending Route
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Input Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{10,15}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number format.' });
  }

  // Email Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });

  // Email Content
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender
    to: 'ndangahertier@gmail.com', // Recipient
    subject: `New Appointment Request from ${name}`,
    html: `
      <div style="padding: 20px; font-family: Arial, sans-serif; border: 1px solid lightgray; border-radius: 10px;">
        <h2 style="color: #4CAF50;">New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      </div>
    `,
  };

  try {
    // Send Email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
