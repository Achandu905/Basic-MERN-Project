import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import studentRoutes from './routes/student.js';
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use('/students',studentRoutes)

app.use(bodyParser.json({ limit: "20mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "20mb", extended:true }))

app.use(cors());



const CONNECTION_URL = 'mongodb+srv://chandu1:Tdkf4B4P7U7B6Ak3@cluster0.c47rhqs.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`connection is established and running on port:${PORT}`))).catch((err) => console.log(err))

 mongoose.set('strictQuery',false)
