import clientAxios from "../config/AxiosClient";
import { ProductoSchema } from "../schema/ProductSchema";

type ProductoData = {
	[k: string]: FormDataEntryValue;
};

export async function createProduct(product: ProductoData) {
	const result = ProductoSchema.safeParse({
		name: product.name,
		price: +product.price,
	});

	try {
		if (!result.success) {
			throw new Error("Datos invalidos.");
		}

		const { data } = await clientAxios.post("/api/admin/", result.data);
		return data;
	} catch (e) {
		console.log(e);
	}
}
