// Declare Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require("./seeders/seed");

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
    useCreateIndex: true,
    useFindAndModify: false
});

// Connect to Routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Start Port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})