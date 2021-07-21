const path = require("path");

// Export to server as a function
module.exports = (app) => {
    // Get home page 
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    })
    // Get the exercise page
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
    })
    // Get the workout page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/stats.html"));
    })
};

