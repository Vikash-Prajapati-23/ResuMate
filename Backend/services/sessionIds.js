import { session } from "../models/sessionModel.js";

export async function setUser(sessionId, user) {
    await session.create({
        sessionId,
        userId: user._id, 
    });
};

export async function getUser(sessionId) {
    const userSession = await session.find({ sessionId }).populate("userId");
    return userSession ? userSession.userId : null;
};

export async function deleteUser(sessionId) {
    const deletedSession = await session.deleteOne({ sessionId });
    return console.log(deletedSession, "Session deleted.");
}