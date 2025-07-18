import mongoose from "mongoose";

export async function connectToMongoUrl(url) {
    try {
        await mongoose.connect(url);
        console.log("MongoDb connected successfully.!");
    } catch (error) {
        console.log("Failed to connect to mongoDB.", error.message);
    }
};