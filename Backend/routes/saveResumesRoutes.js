import express from "express";
import { createResume, fetchResumes, getResumeById } from "../controllers/resumeController.js";

const router = express.Router();

router.patch("/:resumeId", createResume);
router.get("/saved-resumes", fetchResumes);
router.get("/view-resume/:resumeId", getResumeById);

export default router;
