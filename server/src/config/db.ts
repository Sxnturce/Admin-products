import { Sequelize } from "sequelize-typescript";

const url_db = process.env.DB_URL;
const db = new Sequelize(url_db, {
	models: [__dirname + "/../models/**/*.ts"],
	define: {
		defaultScope: {
			attributes: { exclude: ["createdAt", "updatedAt"] },
		},
		timestamps: false,
	},
	dialectOptions: {
		ssl: {
			require: false,
		},
	},
	logging: false,
});

export default db;
