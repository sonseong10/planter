import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-error";
import messageRoute from "./routes/message";
import authRoutes from "./routes/auth";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/", messageRoute);

app.use("/api/auth", authRoutes);

app.use((_: Request, res: Response) => {
  res.sendStatus(404);
});

app.use((error: Error, _: Request, res: Response, __: NextFunction) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
