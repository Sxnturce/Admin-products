import db from "../config/db";
import c from "colors";

async function connectDB() {
	try {
		await db.authenticate();
		db.sync();
		console.log(c.bold.yellow("Conexion exitosa a la DB 🚀"));
	} catch (e) {
		console.log(c.bold.red("Hubo un error al intentar conectar la db ☠️"));
	}
}

export default connectDB;
