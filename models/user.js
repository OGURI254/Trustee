import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    id: {type: String},
    resetOTP: {type: String},
    otpExpires: {type: Date},
    termsAccepted: { type: Boolean, default: false },
    dateOfBirth: { type: String },
    frontIdImage: { type: String }, // URL or file path
    backIdImage: { type: String },  // URL or file path
    selectedPlans: [String],
    businessName: { type: String },
    businessInfoNumber: { type: String },
    contactInformation: { type: String },
    businessDescription: { type: String }
})

export default mongoose.model('User', userSchema)