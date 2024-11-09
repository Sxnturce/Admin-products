import { Link, Form, useActionData, useLoaderData } from "react-router-dom";
import { Producto, ProductoErr } from "../types";
import ProductForm from "../components/ProductForm";

function Editar() {
	const err = useActionData() as ProductoErr;
	const data = useLoaderData() as Producto;

	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-slate-700">Editar producto</h1>
				<Link
					to={"/"}
					className="bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors ease-in-out duration-300 p-2 rounded"
				>
					Regresar al inicio
				</Link>
			</div>

			<Form className="mt-10" method="post">
				<ProductForm data={data} err={err} />
				<input
					type="submit"
					className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
					value="Guardar Cambios"
				/>
			</Form>
		</>
	);
}

export default Editar;
