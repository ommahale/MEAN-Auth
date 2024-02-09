import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import roleRouter from "./routes/roles.js"
const app =express();
dotenv.config();
app.use(express.json())
const connectstr = process.env.MONGODB_STR;
const connect = async ()=>{
    try {
        await mongoose.connect(connectstr);
        console.log("Connected to Database")
    }catch(e){
        throw e;
    }
}

app.use('/api/role',roleRouter)

app.listen(8800,()=>{
    connect()
    console.log("app running on port 8800");
})