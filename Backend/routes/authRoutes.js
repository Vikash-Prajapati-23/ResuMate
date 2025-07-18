import express from "express";
import { handleSignUp } from "../controllers/authController.js";


const router = express.Router();

router.post("/signup", handleSignUp);


export default router;