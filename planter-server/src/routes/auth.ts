import { Router } from "express";
import { register, login, userInfo } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", authMiddleware, userInfo);

export default router;
