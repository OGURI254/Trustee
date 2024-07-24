import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

import User from '../models/user.js'


export const signin = async (req, res) => {
    const {email, password} = req.body;

    try{
        const existingUser = await User.findOne({ email });
        if(!existingUser) return res.status(404).json({message: "User doesn't exist."})

        const isPasswordCorrect =  await bcrypt.compare(password, existingUser.password)

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"})

        const token = jwt.sign({email:existingUser.email, id:existingUser._id}, 'test', {expiresIn: "1h"})

        res.status(200).json({result: existingUser, token})

    } catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }

}

export const signup = async (req, res) => {
    const {email, password, name, confirmPassword, phoneNumber} = req.body;

    try {
        const existingUser = await User.findOne({email})

        if(existingUser) return res.status(404).json({message: "User already exist."})
        
        if(password != confirmPassword) return res.status(404).json({message: "Passwords dont match."})
        
        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await User.create({email, password: hashedPassword, name, phoneNumber})

        const token = jwt.sign({email:result.email, id:result._id}, 'test', {expiresIn: "1h"})

        res.status(200).json({result: result, token})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }
}


// Helper function to generate OTP
const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
};

// Helper function to send email
const sendOTPEmail = async (email, otp) => {
    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or any other email service
        auth: {
            user: 'nicodemusmuholo@gmail.com',
            pass: 'qoki nuwq yaal mzgh '
        }
    });

    const mailOptions = {
        from: 'nicodemusmuholo@gmail.com',
        to: email,
        subject: 'Your Password Reset OTP',
        text: `Your OTP for password reset is ${otp}`
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export const requestPasswordReset = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn't exist." });

        const otp = generateOTP();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

        user.resetOTP = otp;
        user.otpExpires = otpExpires;
        await user.save();

        // Generate temporary token for password reset process
        const token = jwt.sign({ email }, 'temporary_secret_key', { expiresIn: '10m' });

        await sendOTPEmail(email, otp);

        res.status(200).json({ message: 'OTP sent to your email.', token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const verifyOTP = async (req, res) => {
    const { otp } = req.body;
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or incorrectly formatted' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, 'temporary_secret_key');
        const email = decodedToken.email;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn't exist." });

        if (user.resetOTP !== otp || user.otpExpires < new Date()) {
            return res.status(400).json({ message: 'Invalid or expired OTP.' });
        }

        res.status(200).json({ message: 'OTP verified.', token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const resetPassword = async (req, res) => {
    const { newPassword, confirmPassword } = req.body;
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or incorrectly formatted' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, 'temporary_secret_key');
        const email = decodedToken.email;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn't exist." });

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match.' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 12);
        user.password = hashedPassword;
        user.resetOTP = undefined;
        user.otpExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Password successfully changed.' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};


// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the destination folder
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage });

export const acceptTerms = async (req, res) => {
    const { email, termsAccepted } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn't exist." });

        user.termsAccepted = termsAccepted;
        await user.save();

        res.status(200).json({ message: 'Terms acceptance updated.' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const setDate = async (req, res) => {
    const { email, dateOfBirth } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn't exist." });

        user.dateOfBirth = dateOfBirth;
        await user.save();

        res.status(200).json({ message: 'Date of birth updated.' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const uploadIdImages = async (req, res) => {
    const { email } = req.body;
    const frontIdImage = req.file('frontIdImage').path;
    const backIdImage = req.file('backIdImage').path;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn't exist." });

        user.frontIdImage = frontIdImage;
        user.backIdImage = backIdImage;
        await user.save();

        res.status(200).json({ message: 'ID images uploaded.' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const selectPlans = async (req, res) => {
    const { email, selectedPlans } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn't exist." });

        user.selectedPlans = selectedPlans;
        await user.save();

        res.status(200).json({ message: 'Plans updated.' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const setBusinessDetails = async (req, res) => {
    const { email, businessName, businessInfoNumber, contactInformation, businessDescription } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn't exist." });

        user.businessName = businessName;
        user.businessInfoNumber = businessInfoNumber;
        user.contactInformation = contactInformation;
        user.businessDescription = businessDescription;
        await user.save();

        res.status(200).json({ message: 'Business details updated.' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const finalizeSignup = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn't exist." });

        // Logic to finalize signup, e.g., send confirmation email, update status, etc.
        
        res.status(200).json({ message: 'Signup finalized.' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};