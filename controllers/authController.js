import bcrypt from "bcrypt";

import { User } from "../models/User.js";

class AuthController {
  // register
  async register(req, res) {
    const newUser = new User({
      username: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export const authController = new AuthController();
