import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { addToExcel, getExcel } from "../controllers/excelController.js";

const excelRoute = express.Router();

//Get product reviews
excelRoute.post("/", addToExcel);
excelRoute.get("/get/:user_id", getExcel);

export default excelRoute;
