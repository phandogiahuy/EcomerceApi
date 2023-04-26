import { User } from "../models/User.js";
import bcrypt from "bcrypt";

class UserController {
  async update(req, res) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).json(error);
      }
    }

    try {
      await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("account has been updated");
    } catch (error) {
      res.status(502).json(error);
    }
  }
  //delete user
  async delete(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export const userController = new UserController();
