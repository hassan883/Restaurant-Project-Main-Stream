const express = require('express');
const { signupController,signinController } = require('../controllers/auth');
const router = express.Router();
const {signupValidator,signinValidator, validatorResult} = require('../middleware/validator');

router.post('/signup',signupValidator, validatorResult, signupController);
router.post('/signin',signinValidator, validatorResult, signinController);



module.exports = router;
