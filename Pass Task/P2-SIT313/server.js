const express = require("express");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");
const path = require("path");

const app = express();
const PORT = 3000;

dotenv.config();

// Check environment variables
if (!process.env.sendgrid_api) {
    console.error("ERROR: SendGrid API key is missing.");
    process.exit(1);
}

if (!process.env.sendgrid_from_email) {
    console.error("ERROR: SendGrid sender email is missing.");
    process.exit(1);
}

// Configure SendGrid
sgMail.setApiKey(process.env.sendgrid_api);

// Allows Express to read HTML form data
app.use(express.urlencoded({ extended: true }));

// Display website
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Handle subscription form
app.post("/", async (req, res) => {

    console.log("Form data received:", req.body);

    const email = req.body.email;

    if (!email) {
        return res.status(400).send("Email is required.");
    }

    const message = {
        to: email,
        from: process.env.sendgrid_from_email,
        subject: "Welcome to Abhijay's Website!",
        text: "Thank you for subscribing to Abhijay's website. Welcome!",
        html: `
            <h1>Welcome to Abhijay's Website!</h1>
            <p>Thank you for subscribing to my website.</p>
            <p>You will now receive updates from my website.</p>
        `
    };

    try {

        const result = await sgMail.send(message);

        console.log("Email sent successfully!");
        console.log("SendGrid Status Code:", result[0].statusCode);

        res.status(200).send(
            "Thank you for subscribing! Please check your email."
        );

    } catch (error) {

        console.error("SendGrid Error:");

        if (error.response) {
            console.error(error.response.body);
        } else {
            console.error(error);
        }

        res.status(500).send(
            "Something went wrong while sending the email."
        );
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});