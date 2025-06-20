import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js"
import { errorMiddleware } from "./error/error.js";
import {} from "./error/error.js"
import detailRouter from './routes/detailRoute.js'
import authRouter from './routes/authRoute.js';


const app = express();
dotenv.config({path: "./config/config.env"});

app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/detail' , detailRouter);
app.use('/api', authRouter);

app.post('/api/v1/detail/send', (req, res) => {
  const { name, email, phone } = req.body;
  res.json({ success: true, message: 'Received!', data: { name, email, phone , description} });
});

dbConnection();

app.use(errorMiddleware)  

export default app;