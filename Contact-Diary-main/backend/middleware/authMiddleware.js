const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔍 DEBUG
    console.log("DECODED JWT PAYLOAD:", decoded);

    req.user = { userId: decoded.userId }; // must exist
    next();
  } catch (err) {
    console.error("JWT ERROR:", err);
    res.status(401).json({ message: "Invalid token" });
  }
};

