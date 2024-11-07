import { ProductoSchema } from "../schema/ProductSchema";
import { z } from "zod";

export type ProductoErr = {
	errName: string;
	errPrice: string;
};

export type Producto = z.infer<typeof ProductoSchema>;
