import mongoose from "mongoose";
import connectDB from "./db/index.js";

connectDB()























// import mongoose from "mongoose";
// import { DB_name } from "./constants.js";
// import express from "express";
// import dotenv from "dotenv"

// dotenv.config()
// const app = express()
// app.use(express.json());
// ( async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
//         app.on("error",(error)=>{
//             console.log("error",error);
//             throw error
//         })
//         app.listen(process.env.PORT , ()=>{
//             console.log(`App is lsitening on port${process.env.PORT}`)
//         })
//     }catch(error){
//         console.error("ERROR:",error)
//         throw error
//     }
// })()