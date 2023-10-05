import Router from "express-promise-router";
import {
  getAllTasks,
  createTaks,
  deleteTaks,
  getTaks,
  updateTaks,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaks);
router.post("/tasks", createTaks);
router.put("/tasks/:id", updateTaks);
router.delete("/tasks/:id", deleteTaks);

export default router;
