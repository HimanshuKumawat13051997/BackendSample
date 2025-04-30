import { asyncHandler } from "../utlis/asyncHandler.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
import { Project } from "../models/project.models.js";
import { Task } from "../models/task.model.js";

const getAllTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const allTasks = await Task.find({ projectId: id });

  if (!allTasks) {
    throw new ApiError(400, "No Task Found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, allTasks, "Task Found Successfully"));
});

const createTask = asyncHandler(async (req, res) => {
  const { title, description, status } = req.body;
  const { id } = req.params;

  let ts = Date.now();

  let date_time = new Date(ts);
  let date = date_time.getDate();
  let month = date_time.getMonth() + 1;
  let year = date_time.getFullYear();

  
  let completedon =
    status === "Completed" ? `${year}-${month}-${date}` : "Pending";

  let newtask = new Task({
    title,
    description,
    status: completedon,
    projectId: id,
  });

  await newtask.save();

  let findcreatetask = await Task.findOne({ _id: newtask._id });

  if (!findcreatetask) {
    throw new ApiError(400, "Task not Created");
  }

  let currentproject = Project.updateOne(
    { _id: id },
    {
      $push: {
        task: findcreatetask._id,
      },
    }
  );

  return res
    .status(201)
    .json(new ApiResponse(200, {}, "Task Created Successfully"));
});

const deleteTask = asyncHandler(async (req, res) => {
  const { taskid } = req.body;
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "No Result");
  }

  await Task.deleteOne({ _id: taskid });

  let projectupdates = await Project.updateOne(
    { _id: id },
    {
      $pull: { task: taskid },
    }
  );

  return res
    .status(201)
    .json(new ApiResponse(200, {}, "Task Deleted Successfully"));
});

const updateTask = asyncHandler(async (req, res) => {
  const { title, description, status, _id } = req.body;
  const { id } = req.params;
  if (!id) {
    throw new ApiError(400, "No Result");
  }

  let ts = Date.now();

  let date_time = new Date(ts);
  let date = date_time.getDate();
  let month = date_time.getMonth() + 1;
  let year = date_time.getFullYear();

  let completedon =
    status === "Completed" ? `${year}-${month}-${date}` : "Pending";

  await Task.updateOne(
    { _id: _id },
    {
      title,
      description,
      status: completedon
    }
  );

  res.status(200).json(new ApiResponse(200, {}, "Task Updated"));
});
export { createTask, deleteTask, getAllTask, updateTask };
