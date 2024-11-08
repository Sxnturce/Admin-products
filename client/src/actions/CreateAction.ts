import { ActionFunctionArgs, redirect } from "react-router-dom";
import { createProduct } from "../services/product-service";
import { ProductoErr } from "../types";

export async function action({ request }: ActionFunctionArgs) {
	const data = Object.fromEntries(await request.formData());
	const err = {} as ProductoErr;

	if (!data.name) {
		err.errName = "Este campo no puede estar vacio.";
	}

	if (Number(data.name)) {
		err.errName = "No se aceptan valores numericos";
	}

	if (+data.price <= 0) {
		err.errPrice = "Como minimo tiene que ser 1 o mayor que el.";
	}

	if (Object.keys(err).length) {
		return err;
	}

	await createProduct(data);
	return redirect("/");
}
