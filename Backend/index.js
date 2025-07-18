import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToMongoUrl } from "./connectToMongoDB/connectToMongoDBUrl.js";

import authRoute from "./routes/authRoutes.js";

dotenv.config();

connectToMongoUrl(process.env.MONGO_DB_CONNECTION_STRING);

// Creating app server.
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://resumate-ai-resume-builder.vercel.app",
    ],
    //   credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes...
app.use("/api/auth", authRoute);



app.get("/api/auth/test", (req, res) => {
  res.send("Auth route working!");
});


// app.listen(PORT, () => {
//   console.log(`Server is running at port ${PORT}`);
// });

app.listen(3001, "0.0.0.0", () => {
  console.log("Server is running at port 3001;");
});

