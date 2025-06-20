import express from "express";
import { Login } from "../models/loginSchema.js";
const router = express.Router();

router.post("/logins", async (req, res) => {
  console.log(req.body);
  try {
    const logins = await Login.insertMany(req.body.logins);
    res.status(201).json({ success: true, logins });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
router.get("/logins/:email", async (req, res) => {
  try {
    const login = await Login.findOne({ email: req.params.email });
    if (!login) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, login });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Login.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;