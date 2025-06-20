import { Login } from '../models/loginSchema.js'; // Create this schema
import { users } from "../models/userSchema.js";

export const saveLoginData = async (req, res, next) => {
  try {
    const loginData = req.body;
    const saved = await Login.create(loginData);
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    next(error);
  }
};