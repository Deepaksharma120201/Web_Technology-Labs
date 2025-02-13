const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.cookie("userId", "1234", {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
    secure: true,
    sameSite: "None",
  });
  res.cookie("sessionId", "1", {
    secure: true,
    sameSite: "None",
  });
  res.json({ message: "Welcome to Cookie API!" });
});

app.post("/check-email", (req, res) => {
  const { email } = req.body;
  const trimmedEmail = email.trim();

  // Check if User ID is present in cookies
  console.log("UserId: ", req.cookies.userId);
  if (!req.cookies.userId) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  // General email regex pattern
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ message: "Invalid email address!" });
  }

  // Return success message
  res.json({ message: "Valid email address!" });
});

// Start Server
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
