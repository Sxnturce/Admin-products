import { ActionFunctionArgs, redirect } from "react-router-dom";
import {
	createProduct,
	editProduct,
	deleteProduct,
	patchProduct,
} from "../services/product-service";
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

export async function actionEdit({ request, params }: ActionFunctionArgs) {
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

	const id = params.id;
	if (id) {
		try {
			await editProduct(+id, data);
			return redirect("/");
		} catch (e) {
			console.log(e);
		}
	}

	return {};
}

export async function actiondelete({ params }: ActionFunctionArgs) {
	if (params.id) {
		try {
			await deleteProduct(+params.id);
		} catch (e) {
			redirect("/");
			console.log(e);
		}
	}

	return redirect("/");
}

export async function actionPatch({ request }: ActionFunctionArgs) {
	const data = Object.fromEntries(await request.formData());
	await patchProduct(+data.id);

	return {};
}
