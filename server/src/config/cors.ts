import cors, { CorsOptions } from "cors";

function corsClient() {
	const corsOptions: CorsOptions = {
		origin: process.env.FRONTEND_URL,
		optionsSuccessStatus: 200,
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	};

	return cors(corsOptions);
}

export default corsClient;
