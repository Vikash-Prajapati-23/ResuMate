import { verifyToken } from "../services/jwtTokens";

export function authenticateUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorised." });

  try {
    const decoded = verifyToken(token);
    if (!decoded)
      return res.status(401).json({ message: "Invalid or expired Token." });

    req.body = decoded;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
