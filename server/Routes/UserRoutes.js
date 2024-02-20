const express = require('express');
const User = require('../Models/UserModel');
const generateToken = require('../utils/generateToken');
// const { sendVerificationCode } = require('../utils/twilio');
const userRoutes = express.Router();



userRoutes.post('/login', async (req, res) => {
    const { phoneNumber, password } = req.body;
    const user = await User.findOne({ phoneNumber });
    if (user && (await user.matchPassword(password))) {
        // const verificationCode = Math.floor(100000 + Math.random() * 900000);

        // Send the verification code via SMS
        // await sendVerificationCode(phoneNumber, verificationCode.toString());
        res.json({
            _id: user._id,
            name: user.name,
            phoneNumber: user.phoneNumber,
            role: user.role,
            token: generateToken(user._id),
            // verificationCode: verificationCode,
        })
    } else {
        return res.status(401).send({ message: 'Invalid phone number or password' });
    }
});


userRoutes.post('/', async (req, res) => {
    const { name, phoneNumber, password } = req.body;
    const userExists = await User.findOne({ phoneNumber });

    if (userExists) {
        return res.status(401).send({ message: 'User already exists' });
    }

    const user = await User.create({
        name,
        phoneNumber,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            phoneNumber: user.phoneNumber,
            token: generateToken(user._id),
        });
    } else {
        return res.status(400).send({ message: 'Invalid user data' });
    }
});


module.exports = userRoutes;
