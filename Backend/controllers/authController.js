import { auth } from "../models/authModel.js";

export async function handleSignUp(req, res) {
  const { userName, email, password } = req.body;

  try {
    const exists = await auth.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists.!" });
    }

    const newUser = await auth.create({
      userName,
      email,
      password,
    });

    return res.status(200).json({
      message: "Account created successfully.!",
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
