import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes";
import swaggerui from "swagger-ui-express";
import swaggerspec from "./config/swagger";
import corsClient from "./config/cors";
import morgan from "morgan";

const server = express();

dotenv.config();
server.use(express.json());
server.use(corsClient());
server.use(morgan("dev"));

server.use("/api/admin/", router);

//Docs
server.use("/docs", swaggerui.serve, swaggerui.setup(swaggerspec));

export default server;
