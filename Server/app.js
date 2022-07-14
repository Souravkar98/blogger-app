
import express from "express";
import mongoose from 'mongoose'
import router from "./routes/user.js";

const app = express();

app.use('/api/users', router)
mongoose
  .connect(
    "mongodb+srv://souravkar:PwgIZvKZ6TIFbdY9@cluster0.a6k5v0v.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(8000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 8000")
  )
  .catch((err) => console.log(err));


//PwgIZvKZ6TIFbdY9
//mongodb+srv://souravkar:<password>@cluster0.a6k5v0v.mongodb.net/?retryWrites=true&w=majority