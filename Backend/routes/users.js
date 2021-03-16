const router = require('express').Router();
const User = require('../models/user.models');

router.get('/',(req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err))
});

router.post('/add', async (req,res)=>{
    const userName = await req.body.userName;
    const newUser = new User({userName});
    newUser.save()
    .then(()=> res.json('User added!'))
    .catch(err => res.status(400).json(err)) 
});

module.exports = router;
    
