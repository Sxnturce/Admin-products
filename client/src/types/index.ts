import {
	ProductoPickSchema,
	ProductoSchema,
	ProductosSchema,
} from "../schema/ProductSchema";
import { z } from "zod";

export type ProductoErr = {
	errName: string;
	errPrice: string;
};

export type ProductoPick = z.infer<typeof ProductoPickSchema>;

export type Producto = z.infer<typeof ProductoSchema>;
export type Productos = z.infer<typeof ProductosSchema>;
