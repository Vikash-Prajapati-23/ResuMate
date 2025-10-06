import express from "express";
import { createResume, deleteResume, fetchResumes, getResumeById } from "../controllers/resumeController.js";

const router = express.Router();

router.patch("/:resumeId", createResume);
router.get("/saved-resumes", fetchResumes);
router.get("/view-resume/:resumeId", getResumeById);
router.delete("/delete-resume/:resumeId", deleteResume);

export default router;
