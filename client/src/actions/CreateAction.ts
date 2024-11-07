import { ActionFunctionArgs } from "react-router-dom";
import { createProduct } from "../services/product-service";
import { ProductoErr } from "../types";

export async function action({ request }: ActionFunctionArgs) {
	const data = Object.fromEntries(await request.formData());
	const err = {} as ProductoErr;

	if (!data.name) {
		err.errName = "Hay un problema";
	}

	if (+data.price <= 0) {
		err.errPrice = "Hay un problema price";
	}

	if (Object.keys(err).length) {
		return err;
	}

	const result = await createProduct(data);
	console.log(result);
	return {};
}
