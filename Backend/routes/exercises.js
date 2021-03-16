const router = require('express').Router();
const Exercise = require('../models/exercise.model');

router.get('/', (req,res)=>{
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json(err));
});

router.post('/add', async (req,res)=>{
    const userName = await req.body.userName;
    const description = await req.body.description;
    const duration = await req.body.duration;
    const date = await Date.parse(req.body.date);

    const newExercise = new Exercise({
        userName,
        description,
        duration,
        date
    });
    newExercise.save()
    .then(()=> res.json('exercise added!'))
    .catch(err => res.status(400).json(err));
});

router.delete('/:id',async(req,res)=>{
   Exercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise deleted'))
    .catch(err => res.status(400).json(err));
});

router.get('/update/:id', (req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise =>{
        exercise.userName = req.body.userName;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = req.body.date;
            exercise.save()
            .then(()=> res.json("exercise uodated!"))
            .catch(err => res.status(400).json(err));

    })
    .catch(err => res.status(400).json(err))
    
})
module.exports = router;
