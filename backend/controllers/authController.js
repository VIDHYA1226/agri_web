import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// User registration
export const register = async (req, res) => {
  try {
    // Input validation
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }

    // Hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();
    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ success: false, message: "Username or email already exists" });
    }
    res.status(500).json({ success: false, message: "Failed to create user" });
  }
};

// User login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    // Input validation
    if (!email || !req.body.password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    const user = await User.findOne({ email });

    // If user doesn't exist
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check password
    const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

    // If password is incorrect
    if (!checkCorrectPassword) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = user._doc;

    // Create JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });


    // Set token in browser cookies
    res.cookie('accessToken', token, { httpOnly: true, expires: new Date(Date.now() + 3600000) });

    res.status(200).json({ token, data: { ...rest }, role });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};