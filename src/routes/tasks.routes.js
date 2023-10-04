import { Router } from "express";

const router = Router();
router.get("/tasks", (req, res) => {
  res.send("Obteniendo tareas");
});
router.get("/tasks/:id", (req, res) => {
  res.send("Obteniendo tarea");
});
router.post("/tasks", (req, res) => {
  res.send("creando tarea");
});
router.put("/tasks/:id", (req, res) => {
  res.send("ACtualizando tarea");
});
router.delete("/tasks:id", (req, res) => {
  res.send("Eliminando tarea");
});

export default router;
