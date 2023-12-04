const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/user_profiles', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the user schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    place: String,
    pincode: String,
    email: String,
    password: String,
    phoneNumber: String, 
    authenticatorApp: String,
    lastLogin: Date
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files (like index.html)

// Handle POST request to submit user profile
app.post('/submit-profile', (req, res) => {
    const userData = req.body;

    // Create a new user instance
    const user = new User({
        firstName: userData.firstName,
        lastName: userData.lastName,
        dob: userData.dob,
        place: userData.place,
        pincode: userData.pincode,
        email: userData.email,
        password: userData.password,
        phoneNumber: userData.phoneNumber,
        authenticatorApp: userData.authenticatorApp,
        lastLogin: new Date()
    });

    // Save the user to the database
    user.save((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Profile Submitted Successfully!');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
