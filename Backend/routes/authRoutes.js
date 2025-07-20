import express from "express";
import { handleSignUp, handleLogin, verifyLogin, verifyLogout } from "../controllers/authController.js";


const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
router.get("/me", verifyLogin);
router.get("/logout", verifyLogout);


export default router;