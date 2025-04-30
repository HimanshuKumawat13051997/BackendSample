import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  projectname: {
    type: String,
    required: true,
  },
  userId:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  task: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ]
},{
  timestamps: true
});

export const Project = mongoose.model("Project", projectSchema);
