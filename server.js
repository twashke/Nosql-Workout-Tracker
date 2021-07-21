// Declare Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Declare Port
const PORT = process.env.PORT || 3000;

// Create express app
const app = express();

// Use logger
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the Public Folder
app.use(express.static("public"));

// Connect to Mongo Database
mongoose.connect(process.env.MOONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Connect to Routes
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start Port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})