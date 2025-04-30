import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createProject, deleteProject, getallProject } from "../controllers/project.controller.js";

const projectrouter = Router();


projectrouter.post("/addproject", verifyJWT, createProject)

projectrouter.post("/deleteproject", verifyJWT, deleteProject)

projectrouter.get("/getallproject", verifyJWT, getallProject)



export default projectrouter;
