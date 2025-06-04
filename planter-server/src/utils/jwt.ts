import jwt, { Secret, JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, JWT_SECRET as Secret, { expiresIn: 1 });
};

export const verifyToken = (token: string): string | JwtPayload => {
  return jwt.verify(token, JWT_SECRET as Secret);
};
