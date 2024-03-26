import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const token = authorizationHeader.split(" ")[1];

    console.log(token);

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      req.user = user;
      next();
    } catch (err) {
      console.log("Error in token verification:", err.message);
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }
  } catch (error) {
    console.log("Error in protectRoute middleware:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
