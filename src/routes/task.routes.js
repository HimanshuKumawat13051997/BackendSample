import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createTask, deleteTask, getAllTask, updateTask } from "../controllers/task.controller.js";

const taskrouter = Router();


taskrouter.post("/addtask/:id", verifyJWT, createTask)
taskrouter.get("/alltask/:id", verifyJWT, getAllTask)
taskrouter.post("/deletetask/:id", verifyJWT, deleteTask)
taskrouter.put("/updatetask/:id", verifyJWT, updateTask)





export default taskrouter;
