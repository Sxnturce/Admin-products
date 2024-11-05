import { check, validationResult } from "express-validator";
import { Request } from "express";

export async function productValidator(req: Request) {
	await check("name")
		.notEmpty()
		.withMessage("El producto no puede ir vacio.")
		.run(req);

	await check("price")
		.notEmpty()
		.withMessage("El precio no puede ir vacio.")
		.isNumeric()
		.withMessage("El formato string no esta permitido.")
		.custom((value) => value > 0)
		.withMessage("Precio no valido.")
		.run(req);

	return validationResult(req);
}

export async function paramValidator(req: Request) {
	await check("id")
		.notEmpty()
		.isNumeric()
		.withMessage("El formato string no esta permitido.")
		.custom((value) => value > 0)
		.withMessage("Este id no esta permitido.")
		.run(req);

	return validationResult(req);
}

export async function updateValidator(req: Request) {
	await check("id")
		.notEmpty()
		.isNumeric()
		.withMessage("El formato string no esta permitido.")
		.custom((value) => value > 0)
		.withMessage("Este id no esta permitido.")
		.run(req);

	await check("name")
		.notEmpty()
		.withMessage("El producto no puede ir vacio.")
		.run(req);

	await check("price")
		.notEmpty()
		.withMessage("El precio no puede ir vacio.")
		.isNumeric()
		.withMessage("El formato string no esta permitido.")
		.custom((value) => value > 0)
		.withMessage("Precio no valido.")
		.run(req);

	return validationResult(req);
}
