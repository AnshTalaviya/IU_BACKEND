// const express = require('express');
// const router = express.Router();
// const { sendOTP, sendLoginOTP, verifyOTP } = require('../controllers/auth.controller');

// router.post('/send-otp', sendOTP);         // For registration
// router.post('/login-otp', sendLoginOTP);   // For login
// router.post('/verify-otp', verifyOTP);     // Shared for both flows

// module.exports = router;


const express = require('express');
const router = express.Router();
const { sendOTP, sendLoginOTP, verifyOTP, digilockerCallback } = require('../controllers/auth.controller');
// const { protect } = require('../middleware/authMiddleware'); // यदि आप auth middleware का उपयोग करते हैं

router.post('/send-otp', sendOTP);         // For registration
router.post('/login-otp', sendLoginOTP);   // For login
router.post('/verify-otp', verifyOTP);     // Shared for both flows

// DigiLocker related routes
// This endpoint receives the redirect from DigiLocker, MUST BE PUBLIC
router.get('/digilocker-callback', digilockerCallback);

module.exports = router;