import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Hash password
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save(); // Save to MongoDB
  res.status(201).send("User registered");
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) { // Verify password
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // Return JWT
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
};