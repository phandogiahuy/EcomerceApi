import { Router } from "express";
import { verifyTokenAndAuthorization } from "../middleware/JWT.js";
import { userController } from "../controllers/userController.js";

export const userRouter = Router();
userRouter.put("/:id", verifyTokenAndAuthorization, userController.update);
userRouter.delete("/:id", verifyTokenAndAuthorization, userController.delete);
