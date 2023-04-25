import { Router } from "express";

export const cartRouter = Router();
cartRouter.get("", (req, res) => res.send("hello car"));
