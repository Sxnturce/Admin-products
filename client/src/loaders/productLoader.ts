import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getProducts, getProductById } from "../services/product-service";

async function productLoader() {
	const products = await getProducts();
	return products;
}

async function editProductLoader({ params }: LoaderFunctionArgs) {
	if (params.id) {
		try {
			const product = await getProductById(+params.id);
			return product;
		} catch (e) {
			console.log(e);
			return redirect("/");
		}
	}
	return {};
}

export { productLoader, editProductLoader };
