const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseURL = "fitnesstracker";
const collection = ["workouts"];

const db = mongojs(databaseURL, collection);

db.on("error", error => {
    console.log("Database Error", error);
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("App running on port 3000!");
})