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
router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log(params, body)
    Workout.collection.updateOne(
        {
            _id: mongojs.ObjectId(params.id)
        },
        {
            $push: { exercises: body }
        })
        .then(dbWorkout => {

            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.get("/api/workouts/range", ({ body }, res) => {
    Workout.find({})
        .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        })
})
module.exports = router;