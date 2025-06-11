import jwt from "jsonwebtoken";

const accessSecret = process.env.JWT_SECRET || "access_secret";
const refreshSecret = process.env.JWT_REFRESH_SECRET || "refresh_secret";

export const generateAccessToken = (payload: object) => {
  return jwt.sign(payload, accessSecret, { expiresIn: "3h" });
};

export const generateRefreshToken = (payload: object) => {
  return jwt.sign(payload, refreshSecret, { expiresIn: "7d" });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, accessSecret);
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, refreshSecret);
};
