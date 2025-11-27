import express from "express";
import { protect } from "../Middleware/authMiddleware.js";
import { getTasks, createTask, deleteTask } from "../controllers/taskControllers.js";

const router = express.Router();

router.get("/", protect, getTasks);
router.post("/", protect, createTask);
router.delete("/:id", protect, deleteTask);

export default router;
