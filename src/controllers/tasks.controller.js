import { pool } from "../db.js";

export const getAllTasks = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM task");
  return res.json(result.rows);
};

export const getTaks = async (req, res) => {
  const result = await pool.query("SELECT * FROM task WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese id ",
    });
  }
  return res.json(result.rows[0]);
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
      return res.status(409).json({
        message: "Title Task already exist",
      });
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
