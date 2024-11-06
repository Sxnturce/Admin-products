const swaggerSchemas = {
	components: {
		schemas: {
			Product: {
				type: "object",
				properties: {
					id: {
						type: "integer",
						description: "The product ID",
						example: 1,
					},
					name: {
						type: "string",
						description: "The product name",
						example: "Monitor Curvo de 49 pulgadas",
					},
					price: {
						type: "number",
						description: "The product price",
						example: 300,
					},
					available: {
						type: "boolean",
						description: "Product availability status",
						example: true,
					},
				},
			},
		},
	},
};

export default swaggerSchemas;
