import { z } from "zod";

export const ProductoSchema = z.object({
	name: z.string(),
	price: z.number().int().min(1),
});
