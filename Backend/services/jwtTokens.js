import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const secret = process.env.JWT_SECRET_KEY;

export function generateToken(user) {
  // This was for cookie setup.
  // await session.create({
  //     sessionId,
  //     userId: user._id,
  // });
  return jwt.sign(
    // This generates token.
    {
      userId: user._id,
      email: user.email,
    },
    secret,
    {
      expiresIn: "7d",
    }
  ); // Inside the token the above data is stored in the encoded version.
}

export function verifyToken(token) {
  // This was for cookie setup.
  // const userSession = await session.find({ sessionId }).populate("userId");
  // return userSession ? userSession.userId : null;
  try {
    const decod = jwt.verify(token, secret); // This verifies the token with the secret.
    return decod; // This contains userId and email.
  } catch (error) {
    return null;
  }
}

// export function deleteUser(sessionId) {
  // This was for cookie setup.
  // const deletedSession = await session.deleteOne({ sessionId });
  // return console.log(deletedSession, "Session deleted.");

// }
