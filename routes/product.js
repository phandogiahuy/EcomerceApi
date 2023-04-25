import { Router } from "express";

export const productRouter = Router();
productRouter.get("", (req, res) => res.send("hello product"));
