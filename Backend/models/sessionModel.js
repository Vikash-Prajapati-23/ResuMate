import mongoose from "mongoose";

const sessionModel = mongoose.Schema({
    sessionId: {
        unique: true,
        required: true,
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "auth",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: "7d",
    },
});

export const session = mongoose.model("sessionId", sessionModel);