import { ConnectDB } from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
  path: "../env",
});

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`App is Listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed", err);
  });
