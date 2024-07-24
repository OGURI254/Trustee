import express from 'express'

import {
    requestPasswordReset, resetPassword, signin, signup, verifyOTP, acceptTerms,
    setDate,
    uploadIdImages,
    selectPlans,
    setBusinessDetails,
    finalizeSignup
} from '../controllers/user.js'
import auth from '../middleware/auth.js';

import multer from 'multer';


const router = express.Router();
const upload = multer();

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/requestPasswordReset', requestPasswordReset);
router.post('/verifyOTP', verifyOTP);
router.post('/resetPassword', resetPassword);

// Multi-step signup routes
router.post('/acceptTerms', acceptTerms);
router.post('/setDate', setDate);
router.post('/uploadIdImages', upload.fields([{ name: 'frontIdImage' }, { name: 'backIdImage' }]), uploadIdImages);
router.post('/selectPlans', selectPlans);
router.post('/setBusinessDetails', setBusinessDetails);
router.post('/finalizeSignup', finalizeSignup);

export default router;