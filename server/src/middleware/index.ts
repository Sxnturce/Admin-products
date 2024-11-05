import { Request, Response, NextFunction } from "express";
import {
	paramValidator,
	productValidator,
	updateValidator,
} from "../validator/ProductValidator";

export async function checkoutInput(
	req: Request,
	res: Response,
	next: NextFunction
) {
	let error = await productValidator(req);

	if (!error.isEmpty()) {
		res.status(400).json({ err: error.array() });
		return;
	}

	next();
}

export async function checkoutParam(
	req: Request,
	res: Response,
	next: NextFunction
) {
	let error = await paramValidator(req);

	if (!error.isEmpty()) {
		res.status(400).json({ err: error.array() });
		return;
	}

	next();
}

export async function checkoutParamPut(
	req: Request,
	res: Response,
	next: NextFunction
) {
	let error = await updateValidator(req);

	if (!error.isEmpty()) {
		res.status(400).json({ err: error.array() });
		return;
	}

	next();
}
