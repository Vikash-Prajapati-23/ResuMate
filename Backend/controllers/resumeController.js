import { resumeInfomodel } from "../models/resumeModel.js";

export async function createResume(req, res) {
  console.log("CreateResume hit");
  const { resumeId } = req.params;
  const updates = {};

  // const saveData = await resumeInfomodel.create(personalInfo);

  // return res.status(200).json({
  //     message: "Personal details saved successfully.",
  //     personalData: saveData,
  // });

  if (req.body.userId) updates["userId"] = req.body.userId;
  if (req.body.resumeTitle) updates["resumeTitle"] = req.body.resumeTitle;
  if (req.body.personalInfo) updates["personalInfo"] = req.body.personalInfo;
  if (req.body.skils) updates["skils"] = req.body.skils;
  if (req.body.experience) updates["experience"] = req.body.experience;
  if (req.body.projects) updates["projects"] = req.body.projects;
  if (req.body.education) updates["education"] = req.body.education;
  if (req.body.certifications)
    updates["certifications"] = req.body.certifications;

  try {
    const updatedresume = await resumeInfomodel.findOneAndUpdate(
      { resumeId },
      { $set: updates },
      { new: true }
    );

    if (!updatedresume) {
      // return res.status(404).json({ message: "No data here," });
    }

    console.log(updatedresume);

    return res.status(200).json({
      message: "Details saved successfully.!",
      data: updatedresume,
    });
  } catch (error) {
    console.log("Internal server error.");
    return res.status(500).json({ message: "Something went wrong." });
  }
}
