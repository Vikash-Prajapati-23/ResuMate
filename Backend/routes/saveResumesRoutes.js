import express from "express";
import { createResume } from "../controllers/resumeController.js";

const router = express.Router();

router.patch("/:resumeId", createResume);

export default router;