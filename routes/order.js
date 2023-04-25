import { Router } from "express";

export const orderRouter = Router();
orderRouter.get("", (req, res) => res.send("hello r"));
