const router = require('express').Router();
const Exercise = require('../models/exercise.model');

router.get('/', (req,res)=>{
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json(err));
});

router.post('/add', (req,res)=>{
    const userName = req.body.userName;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        userName,
        description,
        duration,
        date
    });
    newExercise.save()
    .then(()=> res.json('exercise added!'))
    .catch(err => res.status(400).json(err));

})

module.exports = router;
