import express from "express";
import mongoose from "mongoose";
import blogRouter from "./Routes/blogRoutes.js";
import router from "./Routes/User.js";
import cors from 'cors';


const app = express();
app.use(express.json())
app.use(cors())
const port = 8000;

mongoose.connect("mongodb+srv://souravkar:WVYG4nlYGcGgzKQY@cluster0.a6k5v0v.mongodb.net/?retryWrites=true&w=majority").then(()=>{app.listen(port)}).then(()=>{console.log("connect to database")}).catch((e)=>{console.log(e)})


app.use('/api/user', router)
app.use('/api/blogs' , blogRouter)


//WVYG4nlYGcGgzKQY