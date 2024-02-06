import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
const app =express();
dotenv.config();
const connectstr = process.env.MONGODB_STR;
const connect = async ()=>{
    try {
        await mongoose.connect(connectstr);
        console.log("Connected to Database")
    }catch(e){
        throw e;
    }
}

app.use('/',(req,res)=>{
    res.send({"message":"Application Backend Home"});
})

app.listen(8800,()=>{
    connect()
    console.log("app running on port 8800");
})