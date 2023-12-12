import express from "express";
import {
  login,
  register
} from "../controllers/userController.js";

const userRoute = express.Router();

//Register user
userRoute.post("/register", register);

//Login user
userRoute.post("/login", login);

export default userRoute;
