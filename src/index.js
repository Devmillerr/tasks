require("dotenv").config();
const express = require("express");
const tasksRouter = require("./routes/tasks");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
