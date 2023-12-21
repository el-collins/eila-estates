import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!");
}).catch((err)=>{
    console.log(err);
});

// create server on port 30000
const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});

// connect app to database
