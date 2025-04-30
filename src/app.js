import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

const basicURL = "api/v1";
//routes import
import router from "./routes/user.routes.js";


//routes declaration
app.use(`/${basicURL}/users`, router);

//route for project
import projectrouter from "./routes/project.routes.js";

app.use(`/${basicURL}/project`, projectrouter);

// route for tasks
import taskrouter from "./routes/task.routes.js";

app.use(`/${basicURL}/task`, taskrouter);