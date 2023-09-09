import express from "express";
import { config } from "dotenv";
import postRoutes from "./routing/posts.js";
import authRoutes from "./routing/auth.js";
import userRoutes from "./routing/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";

config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(5500, () => {
  console.log("connected");
});
