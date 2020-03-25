const router = require("express").Router();
const Workout = require("../models/workout.js");
const mongojs = require("mongojs")

router.get("/api/workouts", ({ body }, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});
router.put("/api/workouts/:id", ({ params }, { body }, res) => {
    Workout.update({ _id: mongojs.ObjectId(params.id) }, { $set: { body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.get("/api/workouts/range", ({ body }, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        })
})
module.exports = router;