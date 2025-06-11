import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/userModel";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt";
import redis from "../config/redis";

export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const existingUser = await findUserByEmail(email);
  if (existingUser)
    res.status(409).json({ message: "이미 존재하는 이메일입니다." });

  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(email, hashedPassword, name);

  res.status(201).json({ message: "회원가입 성공" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user)
    res.status(401).json({ message: "이메일 또는 비밀번호가 틀렸습니다." });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    res.status(401).json({ message: "이메일 또는 비밀번호가 틀렸습니다." });

  const accessToken = generateAccessToken({ id: user.id, email: user.email });
  const refreshToken = generateRefreshToken({ id: user.id });

  await redis.set(
    `refreshToken:${user.id}`,
    refreshToken,
    "EX",
    60 * 60 * 24 * 7
  ); // 7일 TTL

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    .json({ accessToken });
};

export const logout = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      res.status(400).json({ message: "로그인 상태가 아닙니다." });
    }

    // 토큰 검증 후 사용자 ID 추출
    const payload = verifyRefreshToken(token) as { id: number };
    if (!payload) {
      res.status(401).json({ message: "유효하지 않은 토큰입니다." });
    }

    // Redis에서 해당 refreshToken 삭제
    await redis.del(`refreshToken:${payload.id}`);

    // 쿠키 삭제 (빈 값 + 만료시간을 과거로 설정)
    res
      .clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      })
      .json({ message: "로그아웃 성공" });
  } catch (error) {
    res.status(500).json({ message: "서버 에러", error });
  }
};

export const userInfo = async (req: Request, res: Response): Promise<void> => {
  const user = (req as any).user;

  if (!user) {
    res.status(401).json({ message: "인증되지 않았습니다." });
    return;
  }

  const fullUser = await findUserByEmail(user.email);
  if (!fullUser) {
    res.status(404).json({ message: "유저를 찾을 수 없습니다." });
    return;
  }

  res.json({
    id: fullUser.id,
    email: fullUser.email,
    name: fullUser.name,
  });
};

export const refresh = async (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(401);

  try {
    const payload = verifyRefreshToken(token) as { id: number };
    const stored = await redis.get(`refreshToken:${payload.id}`);

    if (stored !== token)
      return res.status(403).json({ message: "유효하지 않은 리프레시 토큰" });

    const newAccessToken = generateAccessToken({ id: payload.id });
    const newRefreshToken = generateRefreshToken({ id: payload.id });

    await redis.set(
      `refreshToken:${payload.id}`,
      newRefreshToken,
      "EX",
      60 * 60 * 24 * 7
    );

    res
      .cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .json({ accessToken: newAccessToken });
  } catch (err) {
    res.sendStatus(403);
  }
};
