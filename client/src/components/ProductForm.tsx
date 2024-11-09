import { Producto, ProductoErr } from "../types";

type ProductPropForm = {
	data?: Producto;
	err: ProductoErr;
};

function ProductForm({ data, err }: ProductPropForm) {
	return (
		<>
			<div className="mb-4">
				<label className="text-gray-600 font-bold" htmlFor="name">
					Nombre Producto:
				</label>
				<input
					id="name"
					type="text"
					className="mt-2 block w-full p-3 bg-gray-50 outline-none border rounded border-gray-300 focus:ring-2 focus:border-transparent"
					placeholder="Nombre del Producto"
					name="name"
					defaultValue={data?.name}
				/>
				{err?.errName && <p className="text-sm text-red-500">{err.errName}</p>}
			</div>
			<div className="mb-4">
				<label className="text-gray-600 font-bold" htmlFor="price">
					Precio:
				</label>
				<input
					id="price"
					type="number"
					min={0}
					className="mt-2 block w-full p-3 bg-gray-50  outline-none border rounded border-gray-300 focus:ring-2 focus:border-transparent"
					placeholder="Precio Producto. ej. 200, 300"
					name="price"
					defaultValue={data?.price}
				/>
				{err?.errPrice && (
					<p className="text-sm text-red-500">{err.errPrice}</p>
				)}
			</div>
		</>
	);
}

export default ProductForm;
