import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"

dotenv.config()

import { DB_name } from "../constants.js";

const connectDB = async ()=>{
    try{
        const connection_instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log(`MongoDb Atlas Connected Host is ${connection_instance.connection.host}`)
    }
    catch(error){
        console.log("Error occured in mongo:",error)
        process.exit(1)
    }
}

export default connectDB;