import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/userModel";
import { generateToken } from "../utils/jwt";

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

  const token = generateToken({ id: user.id, email: user.email });
  res.json({ token });
};
