import db from "../config/db";

export const findUserByEmail = async (email: string) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return (rows as any[])[0];
};

export const createUser = async (
  email: string,
  hashedPassword: string,
  name: string
) => {
  console.log(email, hashedPassword, name);

  await db.query("INSERT INTO users (email, password, name) VALUES (?, ?, ?)", [
    email,
    hashedPassword,
    name,
  ]);
};
