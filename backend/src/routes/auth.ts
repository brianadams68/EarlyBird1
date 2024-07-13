import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";
import { checkAuth } from "../middlewares/checkAuth";
import mongoose from "mongoose";

const router = express.Router();

// Sign-up Route
router.post("/signup", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    // Check if user with the same email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const newUser: IUser = new User({
      username,
      email,
      password: await bcrypt.hash(password, 10),
      userId: new mongoose.Types.ObjectId(), // Generate new ObjectId for userId
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error in sign up:", error);
    res.status(500).json({ error: "User creation failed" });
  }
});

// Protected Route Example
router.get("/protected-route", checkAuth, (req: any, res: Response) => {
  // This function will only execute if checkAuth middleware succeeds
  res.json({ message: "Access granted to protected route" });
});

// Sign-in Route
router.post("/signin", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "your_jwt_secret",
      {
        expiresIn: "1h",
      }
    );
    res.json({ token });
  } catch (error) {
    console.error("Error in sign in:", error);
    res.status(500).json({ error: "Sign-in failed" });
  }
});

export default router;


