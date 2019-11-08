const router = require("express").Router();
const Exercise = require("../models/Exercise");
const Workout = require("../models/Workout");

router.post("/createworkout", async (req, res) => {
  const workout = new Workout({
    name: req.body.name,
    exercises: req.body.exercises.map(exercise => ({
      exerciseId: exercise._id,
      exerciseName: exercise.name,
      exerciseDes: exercise.description,
      exerciseSet: exercise.set,
      exerciseReps: exercise.reps
    }))
  });
  try {
    console.log(req.body.exercises);
    const savedworkout = await workout.save();
    res.send({ savedworkout });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
