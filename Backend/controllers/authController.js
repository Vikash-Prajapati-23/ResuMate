import { auth } from "../models/authModel.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import { setUser, getUser, deleteUser } from "../services/sessionIds.js";

const saltRounds = 10;

export async function handleSignUp(req, res) {
  const { userName, email, password } = req.body;

  try {
    const exists = await auth.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists.!" });
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await auth.create({
      userName,
      email,
      password: hashPassword,
    });

    const sessionId = uuidv4();
    setUser(sessionId, newUser);

    res.cookie("sessionId", sessionId, {
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })


    return res.status(200).json({
      message: "Account created & Logged in successfully.!",
      user: {
        userId: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error({
      message: "Something went wrong while creating a new user.",
      error,
    });
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
}
