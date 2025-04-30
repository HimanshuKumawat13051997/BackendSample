import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const ConnectDB = async () => {
  try {
  
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    
    console.log(
      `\n MongoDB conncected !! DB HOST: ${connectionInstance.connection.host} \n`
    );
  } catch (error) {
    console.log("MongoDB Connection Error: ", error);
    process.exit(1);
  }
};
