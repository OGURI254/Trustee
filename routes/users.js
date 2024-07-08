import express from 'express'

import {requestPasswordReset, resetPassword, signin, signup, verifyOTP} from '../controllers/user.js'
import auth from '../middleware/auth.js';


const router = express.Router();

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/requestPasswordReset', requestPasswordReset);
router.post('/verifyOTP', verifyOTP);
router.post('/resetPassword', resetPassword);


export default router;