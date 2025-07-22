import express from "express";
import { getPersonalInfo } from "../controllers/personalInfoController.js";

const router = express.Router();

router.post("/personal-info", getPersonalInfo);

export default router;