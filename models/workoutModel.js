const mongoose = require("mongoose");

const Schema = mongoose.Schema

const UserWorkout = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type is required!"
            },
            name: {
                type: String,
                trim: true,
                required: "Workout Name is required!"
            },
            duration: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ]
});

const Workout = mongoose.model("Workout", UserWorkout);

module.exports = Workout;