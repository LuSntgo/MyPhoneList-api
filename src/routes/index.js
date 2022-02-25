import { Router } from "express";
import authRouter from "./authRouter.js";
import listRouter from "./listRouter.js";

const router = Router();

router.use(authRouter);
router.use(listRouter);

export default router;
