import clientAxios from "../config/AxiosClient";
import { ProductoPickSchema, ProductosSchema } from "../schema/ProductSchema";

type ProductoData = {
	[k: string]: FormDataEntryValue;
};

export async function createProduct(product: ProductoData) {
	const result = ProductoPickSchema.safeParse({
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

export async function getProducts() {
	const { data } = await clientAxios("/api/admin/");
	const result = ProductosSchema.safeParse(data.data);

	try {
		if (!result.success) {
			throw new Error("Error al traer los datos");
		}

		return result.data;
	} catch (e) {
		console.log(e);
	}
}
