// import("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});
const app = express();
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server is stated at port no : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed !!!! ", err);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.log("ERR: ", err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("SERVER is start on port no: ", process.env.PORT);
//     });
//   } catch (err) {
//     console.error("ERROR: ", err);
//     throw err;
//   }
// })();
