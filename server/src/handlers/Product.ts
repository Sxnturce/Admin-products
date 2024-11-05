import ProductModel from "../models/Product.model";
import { Request, Response } from "express";

class Product {
	static async getProducts(req: Request, res: Response) {
		const products = await ProductModel.findAll({
			order: [["price", "ASC"]],
		});
		res.json({ data: products });
	}

	static async getProductById(req: Request, res: Response) {
		const { id } = req.params;

		const product = await ProductModel.findByPk(id);

		if (!product) {
			res.status(404).json({ err: "Producto no encontrado." });
			return;
		}

		res.json({ data: product });
	}

	static async createProduct(req: Request, res: Response) {
		const product = await ProductModel.create(req.body);
		res.status(201).json({ data: product });
	}

	static async updateAvailable(req: Request, res: Response) {
		const { id } = req.params;
		const product = await ProductModel.findByPk(id);

		if (!product) {
			res.status(404).json({ err: "Producto no encontrado." });
			return;
		}

		product.available = !product.available;
		const result = await product.save();
		res.json({ data: result });
	}

	static async updateProduct(req: Request, res: Response) {
		const { id } = req.params;
		const product = await ProductModel.findByPk(id);

		if (!product) {
			res.status(404).json({ err: "Producto no encontrado." });
			return;
		}

		const result = await product.update(req.body);
		res.json({ data: result });
	}

	static async deleteProduct(req: Request, res: Response) {
		const { id } = req.params;
		const product = await ProductModel.findByPk(id);

		if (!product) {
			res.status(404).json({ err: "Producto inexistente." });
			return;
		}
		await product.destroy();
		res.status(200).json({ msg: "Producto  eliminado correctamente." });
	}
}

export default Product;
