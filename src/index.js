// src/index.js
require("dotenv").config();
const express = require("express");
const tasksRouter = require("./routes/tasks"); // Import the routes file

const app = express();
app.use(express.json()); // Middleware to parse JSON

const port = process.env.PORT || 3000;

// Use the tasks router for all routes starting with '/tasks'
app.use("/tasks", tasksRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
