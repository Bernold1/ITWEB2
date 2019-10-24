//code for JWT inspired by following video: https://www.youtube.com/watch?v=2jqok-WgelI
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {registerValidation} = require('../models/Validation')

//Validation


router.post('/register', async(req,res)=>{
    //Data validation
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if email is in db
    const emailExists = await User.findOne({email: req.body.email});

    if(emailExists) return res.status(400).send('Email already exists');

    //Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPW = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPW
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);

    }catch(err){
        res.status(400).send(err);
    }
});
module.exports = router;

