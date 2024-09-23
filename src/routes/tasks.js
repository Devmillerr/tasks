const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  const task = await prisma.task.create({
    data: {
      title,
      description,
      dueDate: dueDate ? new Date(dueDate) : null,
      priority,
    },
  });
  res.json(task);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const task = await prisma.task.findUnique({ where: { id: parseInt(id) } });
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, status, dueDate, priority } = req.body;
  const task = await prisma.task.update({
    where: { id: parseInt(id) },
    data: {
      title,
      description,
      status,
      dueDate: dueDate ? new Date(dueDate) : null,
      priority,
    },
  });
  res.json(task);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id: parseInt(id) } });
  res.json({ message: "Task deleted" });
});

module.exports = router;
