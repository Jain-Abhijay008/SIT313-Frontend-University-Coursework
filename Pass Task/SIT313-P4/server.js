// server.js - DEV@Deakin SendGrid Email Service
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Set your SendGrid API key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const msg = {
    to: email,
    from: process.env.SENDER_EMAIL || 'noreply@devdeakin.com', // Must be your verified SendGrid Single Sender
    subject: 'Welcome to DEV@Deakin Daily Insider!',
    text: `Welcome to the DEV@Deakin community!\n\nThank you for subscribing to our Daily Insider. Stay tuned for top articles, developer tutorials, and daily tech tips.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #007788; border-bottom: 2px solid #007788; padding-bottom: 10px;">DEV@Deakin Daily Insider</h2>
        <p style="font-size: 16px; color: #334155;">Hello and welcome to <strong>DEV@Deakin</strong>!</p>
        <p style="color: #475569; line-height: 1.6;">
          Thank you for subscribing to our newsletter. You'll now receive curated articles, community tutorials, and coding tips directly in your inbox.
        </p>
        <div style="margin: 25px 0; text-align: center;">
          <a href="http://localhost:5173" style="background-color: #007788; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            Explore DEV@Deakin
          </a>
        </div>
        <hr style="border: none; border-top: 1px solid #cbd5e1; margin: 20px 0;" />
        <p style="font-size: 12px; color: #94a3b8; text-align: center;">
          © 2026 DEV@Deakin. All rights reserved.
        </p>
      </div>
    `,
  };

  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.log(`[DEMO MODE] SendGrid API Key not set. Would have sent email to: ${email}`);
      return res.status(200).json({ 
        message: 'Subscription recorded (Demo mode: set SENDGRID_API_KEY in .env for live delivery).' 
      });
    }

    await sgMail.send(msg);
    console.log(`Welcome email successfully sent to: ${email}`);
    res.status(200).json({ message: 'Welcome email sent successfully!' });
  } catch (error) {
    console.error('SendGrid error:', error?.response?.body || error.message);
    res.status(500).json({ error: 'Failed to send welcome email. Please check your API key and sender identity.' });
  }
});

app.listen(PORT, () => {
  console.log(`DEV@Deakin email server running on http://localhost:${PORT}`);
});
