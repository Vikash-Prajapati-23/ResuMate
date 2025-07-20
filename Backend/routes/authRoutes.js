import express from "express";
import { handleSignUp, handleLogin, verifyLogin } from "../controllers/authController.js";


const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
router.get("/me", verifyLogin);


export default router;