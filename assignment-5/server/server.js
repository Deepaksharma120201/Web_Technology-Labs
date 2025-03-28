const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = 8100;

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);

app.get("/home", (req, res) => {
  res.cookie("userId", "1178", {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
    secure: true,
    sameSite: "None",
    path: "/home",
  });
  res.cookie("sessionId", "1", {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10),
    secure: true,
    sameSite: "None",
    path: "/",
  });
  res.json({ message: "Welcome to Cookies API!" });
});

app.post("/check-email", (req, res) => {
  const { email } = req.body;
  const trimmedEmail = email.trim();

  // Checking User ID
  console.log("UserId: ", req.cookies.userId);
  if (!req.cookies.userId) {
    return res.status(401).json({ message: "Unauthorized user!" });
  }

  // Email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ message: "Invalid email address!" });
  }

  res.json({ message: "Valid email address!" });
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
