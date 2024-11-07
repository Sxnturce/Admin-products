import { Link, Form, useActionData } from "react-router-dom";
import { ProductoErr } from "../types";

function Create() {
	const err = useActionData() as ProductoErr;

	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-slate-700">Crear producto</h1>
				<Link
					to={"/"}
					className="bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors ease-in-out duration-300 p-2 rounded"
				>
					Regresar al inicio
				</Link>
			</div>

			<Form className="mt-10" method="post">
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
					/>
					{err?.errName && (
						<p className="text-sm text-red-500">{err.errName}</p>
					)}
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
					/>
					{err?.errPrice && (
						<p className="text-sm text-red-500">{err.errPrice}</p>
					)}
				</div>
				<input
					type="submit"
					className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
					value="Registrar Producto"
				/>
			</Form>
		</>
	);
}

export default Create;
