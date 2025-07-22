import { personalInfomodel } from "../models/personalInfoModel.js";

export async function getPersonalInfo(req, res) {
    const personalInfo = req.body;

    const saveData = await personalInfomodel.create(personalInfo);

    return res.status(200).json({
        message: "Personal details saved successfully.",
        personalData: saveData,
    });
};