import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes";

const server = express();
dotenv.config();
server.use(express.json());

server.use("/api/admin/", router);

server.get("/api", (req, res) => {
	res.json({ msg: "Desde API" });
});
export default server;
