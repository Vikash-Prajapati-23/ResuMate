import express from "express";
import { handleSignUp } from "../controllers/authController";


const router = express.Router();

router.post("/signUp", handleSignUp);


export default router;