import { auth } from "../models/authModel.js";
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from "../services/jwtTokens.js";

const saltRounds = 10;

// Sign up
export async function handleSignUp(req, res) {
  const { userName, email, password } = req.body;

  try {
    const exists = await auth.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await auth.create({
      userName,
      email,
      password: hashedPassword,
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

    // Here the "authToken" is the name of the cookie and the token is the value of the cookie.
    // We setup the cookies just like that.
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use HTTPS in production
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "Signup successful",
      user: { userName: newUser.userName, email: newUser.email, id: newUser._id },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Login
export async function handleLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await auth.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);

    // Setting the jwt as cookie. 
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: { userName: user.userName, email: user.email, id: user._id },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Verify login
export async function verifyLogin(req, res) {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  // Verify the token with the secret key, if the data matches then its a valid user unless invalid. 
  const userData = verifyToken(token);

  if (!userData) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }

  try {
    // .select("-password")	Tells Mongoose to exclude the password field from the result. The - sign means "do not include".
    const user = await auth.findById(userData.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Verify error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
