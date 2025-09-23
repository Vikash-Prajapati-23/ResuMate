import express from "express";
import { createResume, fetchResumes } from "../controllers/resumeController.js";

const router = express.Router();

router.patch("/:resumeId", createResume);
router.get("/saved-resumes", fetchResumes);

export default router;
