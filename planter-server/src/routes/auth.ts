/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: 인증 관련 API
 */

import { Router } from "express";
import {
  register,
  login,
  userInfo,
  logout,
} from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: 회원가입
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원가입 성공
 */
router.post("/register", register);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: 로그인
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 로그인 성공
 */
router.post("/login", login);

/**
 * @swagger
 * /api/logout:
 *   post:
 *     summary: 로그아웃
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: 로그아웃 성공 (refreshToken 삭제 및 쿠키 제거)
 */
router.post("/logout", logout);

/**
 * @swagger
 * /api/me:
 *   get:
 *     summary: 내 정보 확인
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 유저 정보 반환
 */
router.get("/user", authMiddleware, userInfo);

export default router;
