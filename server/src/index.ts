import server from "./server";
import c from "colors";
import connectDB from "./helpers/ConnectDB";

connectDB();
const port = process.env.PORT || 4000;

server.listen(port, () => {
	console.log(
		`Escuchando en el servidor: ${c.bold.magenta(`http://localhost:${port}`)}`
	);
});
