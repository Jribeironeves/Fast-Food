import express from "express";
import { getUsers } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/user", getUsers);

export default userRouter;