import { getProducts } from "../services/product-service";

async function productLoader() {
	const products = await getProducts();
	return products;
}

export default productLoader;
