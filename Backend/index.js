import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


dotenv.config();

// Creating app server. 
const app = express();


app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => { console.log(`Server is running at port ${PORT}`) });