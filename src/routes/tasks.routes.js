import Router from "express-promise-router";
import {
  getAllTasks,
  createTaks,
  deleteTaks,
  getTaks,
  updateTaks,
} from "../controllers/tasks.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
const router = Router();

router.get("/tasks", isAuth, getAllTasks);
router.get("/tasks/:id", isAuth, getTaks);
router.post("/tasks", isAuth, createTaks);
router.put("/tasks/:id", isAuth, updateTaks);
router.delete("/tasks/:id", isAuth, deleteTaks);

export default router;
