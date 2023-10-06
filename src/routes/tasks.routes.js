import Router from "express-promise-router";
import {
  getAllTasks,
  createTaks,
  deleteTaks,
  getTaks,
  updateTaks,
} from "../controllers/tasks.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", isAuth, getAllTasks);
router.get("/tasks/:id", isAuth, getTaks);
router.post("/tasks", isAuth, validateSchema(createTaskSchema), createTaks);
router.put("/tasks/:id", isAuth, validateSchema(updateTaskSchema), updateTaks);
router.delete("/tasks/:id", isAuth, deleteTaks);

export default router;
