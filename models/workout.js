const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "resistance"
            },
            name: {
                type: String,
                trim: true,
                required: "type of resistance"
            },
            duration: {
                type: Number,
                trim: true,
                required: "the duration of the workout"
            },
            weight: {
                type: Number,
                trim: true,
                required: "the amount of weight used"
            },
            reps: {
                type: Number,
                trim: true,
                required: "enter the reps used for this exercise"
            },
            sets: {
                type: Number,
                trim: true,
                required: "enter how many sets for this exercise"
            }
        },
        {
            type: {
                type: String,
                trim: true,
                required: "cardio"
            },
            name: {
                type: String,
                trim: true,
                required: "cardio exercise name"
            },
            distance: {
                type: Number,
                trim: true,
                required: "enter the distance of your cardio exercise"
            },
            duration: {
                type: Number,
                trim: true,
                required: "enter the duration of your cardio exercise"
            },
        },
        {
            versionKey: false
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;