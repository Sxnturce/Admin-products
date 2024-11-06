import swaggerJSDoc from "swagger-jsdoc";
import swaggerSchemas from "../docs/swagger-schema";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
	swaggerDefinition: {
		openapi: "3.0.2",
		tags: [
			{
				name: "Products",
				description: "API operations related to products.",
			},
		],
		info: {
			title: "Rest API nodeJS - Typescript",
			version: "1.0.0",
			description: "API docs for products",
		},
		components: swaggerSchemas.components,
	},
	apis: ["./src/docs/*.ts"],
};

const swaggerspec = swaggerJSDoc(options);

const swaggeruiOptins: SwaggerUiOptions = {};

export default swaggerspec;
