import { pool } from "../db.js";

export const getAllTasks = (req, res) => {
  res.send("Obteniendo tareas");
};
export const getTaks = (req, res) => {
  res.send("Obteniendo tarea");
};
export const createTaks = async (req, res, next) => {
  const { title, description } = req.body;
  //db insert

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.send("Task already exist");
    }
    next(error);
  }
};
export const updateTaks = (req, res) => {
  res.send("ACtualizando tarea");
};
export const deleteTaks = (req, res) => {
  res.send("Eliminando tarea");
};
