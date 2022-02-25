import { Router } from "express";
import { login, signUp } from "../controllers/authController.js";
import { validateLoginSchema } from "../middleware/validateLoginSchema.js";
import { validateUserSchema } from "../middleware/validateUserSchema.js";

const authRouter = Router();

authRouter.post("/login", validateLoginSchema, login);
authRouter.post("/sign-up", validateUserSchema, signUp);

export default authRouter;
