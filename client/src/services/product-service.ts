import clientAxios from "../config/AxiosClient";
import {
	ProductoPickSchema,
	ProductoSchema,
	ProductosSchema,
} from "../schema/ProductSchema";
import { Producto, ProductoPick } from "../types";

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

export async function getProductById(id: Producto["id"]) {
	const { data } = await clientAxios.get(`/api/admin/${id}`);
	const result = ProductoSchema.safeParse(data.data);
	try {
		if (!result.success) {
			throw new Error("Error al traer el producto");
		}
		return result.data;
	} catch (e) {
		console.log(e);
	}
}

export async function editProduct(id: Producto["id"], product: ProductoData) {
	const result = ProductoPickSchema.safeParse({
		...product,
		price: +product.price,
	});

	try {
		if (!result.success) {
			throw new Error("Error al intentar actualizar el producto");
		}

		await clientAxios.put(`/api/admin/${id}`, result.data);
	} catch (e) {
		console.log(e);
	}
}

export async function patchProduct(id: Producto["id"]) {
	try {
		await clientAxios.patch(`/api/admin/${id}`);
	} catch (e) {
		console.log(e);
	}
}

export async function deleteProduct(id: Producto["id"]) {
	try {
		await clientAxios.delete(`/api/admin/${id}`);
	} catch (e) {
		console.log(e);
	}
}
