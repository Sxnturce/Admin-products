import { Link, Form, useActionData } from "react-router-dom";
import { ProductoErr } from "../types";
import ProductForm from "../components/ProductForm";

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
				<ProductForm err={err} />
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
