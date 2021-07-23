// Require Models
const Workout = require("./../models/workoutModel");

module.exports = (app) => {

// -----------------------------------------|
//    POST New Workout ID for excercise     | 
// -----------------------------------------|

    app.post(`/api/workouts`, ({ body }, res) => {

        Workout.create(body)
            .then((dbWorkout) => {
                res.json(dbWorkout);
                console.log(dbWorkout);
            })
            .catch((error) => {
                res.json(error);
                console.log(error);
            });
    });

    // PUT new workout by id
    app.put(`/api/workouts/:id`, (req, res) => {
        Workout.findByIdAndUpdate({
            _id: req.params.id}, { $push: { exercises: req.body } }, { new: true })
        .then((dbWorkout) => {
            res.json(dbWorkout);
            console.log(dbWorkout);
        })
        .catch((error) => {
            res.json(error);
            console.log(error);
        });
    });


// -----------------------------------------|
//         GET Workout Information          | 
// -----------------------------------------|

    app.get(`/api/workouts`, (req, res) => {
        Workout.find({})
            .then((dbWorkout) => {
                console.log(dbWorkout);
                res.json(dbWorkout);
            })
            .catch((error) => {
                console.log(error);
                res.json(error);
            })
    });

// -----------------------------------------|
//        GET Workout Range for Stats       | 
// -----------------------------------------|

    app.get(`/api/workouts/range`, (req, res) => {
        Workout.find({}).sort({ day: -1 }).limit(7)
            .then((dbWorkout) => {
                console.log(dbWorkout);
                res.json(dbWorkout);
            })
            .catch((error) => {
                console.log(error);
                res.json(error);
            })
    });

}