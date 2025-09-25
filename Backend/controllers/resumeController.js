import { resumeInfomodel } from "../models/resumeModel.js";

export async function createResume(req, res) {
  console.log("CreateResume hit");
  const { resumeId } = req.params;
  const updates = {};

  if (req.body.userId) updates["userId"] = req.body.userId;
  if (req.body.resumeTitle) updates["resumeTitle"] = req.body.resumeTitle;
  if (req.body.personalInfo) updates["personalInfo"] = req.body.personalInfo;
  if (req.body.skills) updates["skills"] = req.body.skills;
  if (req.body.experience) updates["experience"] = req.body.experience;
  if (req.body.projects) updates["projects"] = req.body.projects;
  if (req.body.education) updates["education"] = req.body.education;
  if (req.body.certifications)
    updates["certifications"] = req.body.certifications;

  try {
    const updatedResume = await resumeInfomodel.findOneAndUpdate(
      { resumeId },
      { $set: updates },
      { new: true, upsert: true }
    );

    if (!updatedResume) {
      return res.status(404).json({ message: "No data here," });
    }

    console.log("Resume data:", updatedResume);

    return res.status(200).json({
      message: "Details saved successfully.!",
      data: updatedResume,
    });
  } catch (error) {
    console.log("Internal server error.");
    return res.status(500).json({ message: "Something went wrong." });
  }
}

export async function fetchResumes(req, res) {
  try {
    const savedResumes = await resumeInfomodel.find({
      userId: req.user,
    });
    if (!savedResumes) {
      return res.status(401).json({ message: "No resumes saved." });
    }
    return res.status(200).json({ data: savedResumes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
}

export async function getResumeById(req, res) {
  try {
    const { resumeId } = req.params;
    const resume = await resumeInfomodel.findOne({ resumeId });
    if (!resume) {
      console.log("Resume not found.");
      return res.status(404).json({ message: "Resume not found." });
    }

    return res.status(200).json(resume);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
}
