import mongoose from "mongoose";

const personalInfoSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    theme_color: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
    }
});

export const personalInfomodel = mongoose.model("personalInfo", personalInfoSchema);

