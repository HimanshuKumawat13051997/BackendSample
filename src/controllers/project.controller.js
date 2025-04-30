import { asyncHandler } from "../utlis/asyncHandler.js";
import { ApiError } from "../utlis/ApiError.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
import {Project} from "../models/project.models.js"
import { User } from "../models/user.model.js";


const createProject = asyncHandler(async(req, res)=>{
    const {projectname} = req.body;
    const {_id} = req.user
    let userprojects = await Project.find({userId: _id})

    if(userprojects.length==4){
        throw new ApiError(403,"Your not allowed to create more project")
    }

    let newproject = new Project({
        projectname,
        userId: _id
    })

    newproject = await newproject.save()
    let user = await User.findOne({_id})
    user.project.push(newproject._id)
    await user.save()

    res
    .status(201)
    .json(new ApiResponse(200, {}, "Project Created Successfully"));

})

const deleteProject = asyncHandler(async(req, res)=>{
    const {projectid} = req.body
   

    const {_id} = req.user
    if (!projectid){
        throw new ApiError(400, "No Result")
    }

    await Project.deleteOne({"_id": projectid})

    await User.updateOne({"_id":_id}, {
        $pull: {"project":projectid}
    })

    return res
    .status(201)
    .json(new ApiResponse(200, {}, "Project Deleted Successfully"));
})

const getallProject = asyncHandler(async(req,res)=>{
    const {_id} = req.user;
    if(!_id){
        throw new ApiError(400, "User is not logged in")
    }

    let projects = await Project.find({userId: _id})
    if(!projects){
        throw new ApiError(400, "Projects Not Found")
    }

    res
    .status(200)
    .json(new ApiResponse(200, projects, "Projects found"))
})

export {createProject, deleteProject, getallProject}