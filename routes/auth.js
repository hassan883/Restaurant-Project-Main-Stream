const express = require('express');
const router = express.Router();

router.post('/signup',(req, res)=>{
    console.log("Inside Signup controller");
});


module.exports = router;
