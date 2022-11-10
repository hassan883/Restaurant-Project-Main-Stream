const {check, validationResult} = require('express-validator');



exports.signupValidator = [
    check('username')
        .not().isEmpty()
        .trim()
        .withMessage("All Fields are required"),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage("Invalid Email"),
    check('password')
        .isLength({min: 6})
        .withMessage("Password must be at least 6 character long")

]
exports.signinValidator = [
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage("Invalid Email"),
    check('password')
        .isLength({min: 6})
        .withMessage("Password must be at least 6 character long")

]

exports.validatorResult = (req, res, next) =>{
    const result = validationResult(req);
    const hasError = !result.isEmpty();
    if(hasError){
        const firstError = result.array()[0].msg;
        return res.status(400).json({
            errorMessage: firstError,
        })

        // console.log("HasError : ", hasError);
        // console.log("Result : ", result);
    }

    next();
}
