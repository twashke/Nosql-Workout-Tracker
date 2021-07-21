const path = require("path");

// Export to server as a function
module.exports = (app) => {
    // Get home page 
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/html/index.html"));
    })
    // Get the exercise page
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
    })
    // Get the workout page
    app.get("/workout", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/workout.html"));
    })
};
