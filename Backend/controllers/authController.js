import { auth } from "../models/authModel.js";
import bcrypt from "bcrypt";
// import { v4 as uuidv4 } from "uuid"; // This is for generating unique Id's.
import { generateToken, verifyToken } from "../services/jwtTokens.js";

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

    // In this project I'll use JWT, so I'm commenting this out. 
    // const sessionId = uuidv4();
    // generateToken(sessionId, newUser);

    // Here the "sessionId" is the name of the cookie and the 2nd sessionId is the value of the cookie.
    // We setup the cookies just like that.
    // res.cookie("sessionId", sessionId, {
    //   httpOnly: true,
    //   secure: false,
    //   sameSite: "Lax",
    //   maxAge: 7 * 24 * 60 * 60 * 1000,
    // });

    const token = generateToken(newUser);

    res.cookie("userToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

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

export async function handleLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await auth.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password." });

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) return res.status(400).json({ message: "Invalid email or password." });

    const jwtToken = verifyToken(user);

    // Setting the jwt as cookie. 
    res.cookie("jwtToken", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
    });

    return res.status(200).json({
      message: "Login successfull",
      user: {
        userId: user.userId,
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Internal server error.", error);
    return res.status(500).json({  message: "Something went wrong while loging in."});
  }
}

export function verifyLogin(req, res) {
  const token = req.cookies.token;

  const verify = verifyToken(token);

  return res.status(200).json({
    user: verify,
  });
}
