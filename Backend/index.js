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

const allowedOrigins = [
  "http://localhost:5173",
  "https://ai-resume-builder-bice-one.vercel.app",
  "https://resumate-ai-resume-builder.vercel.app"
];

// This should be defined before any routes.
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("✅ Backend Root Route Working!");
});


// Routes...
app.use("/api/auth", authRoute);



app.get("/api/auth/test", (req, res) => {
  res.send("Auth route working!");
});

// app.listen(PORT, () => {
//   console.log(`Server is running at port ${PORT}`);
// });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at port ${PORT}`);
});
