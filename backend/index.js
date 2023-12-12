import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongoose.js";
import userRoute from "./routes/userRoute.js";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import excelRoute from "./routes/excelRoute.js";

dotenv.config();
connectDB();
const app = express();
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      req.rawBody = buf;
    },
    limit: "50mb",
    extended: true,
  })
);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://elitegnosis.netlify.app",
    ],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    optionSuccessStatus: 204,
    preflightContinue: false,
  })
);

const server = http.createServer(app);

//Api Routes
app.use("/api/user", userRoute);
app.use("/api/excel", excelRoute);

const PORT = process.env.PORT;
server.listen(PORT || 5000, console.log(`Server is running on ${PORT}`));
