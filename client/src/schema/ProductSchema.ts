import { z } from "zod";

export const ProductoPickSchema = z.object({
	name: z.string(),
	price: z.number().int().min(1),
});

export const ProductoSchema = z.object({
	id: z.number().positive().min(1),
	name: z.string(),
	price: z.number().int().min(1),
	available: z.boolean(),
});

export const ProductosSchema = z.array(ProductoSchema);
