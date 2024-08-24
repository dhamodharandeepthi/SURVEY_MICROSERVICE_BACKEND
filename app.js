const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const surveyRoutes = require("./routes/surveyRoutes");

connectDB();

const app = express();
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/surveys", surveyRoutes);

module.exports = app;
