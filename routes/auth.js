const express = require('express');
const { signupController } = require('../controllers/auth');
const router = express.Router();
const {signupValidator, validatorResult} = require('../middleware/validator');

router.post('/signup',signupValidator, validatorResult, signupController);


module.exports = router;
