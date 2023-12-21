import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config();

// 02 connect app to database
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!");
}).catch((err)=>{
    console.log(err);
});

// 01 create server on port 30000
const app = express();

app.use(express.json)

app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});

// request is the data we get from the user/client side
// response is the data we sent from the server side

app.use('/api/user', UserRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode, message,
    })
})
