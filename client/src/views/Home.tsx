import { Link, useLoaderData } from "react-router-dom";
import { Producto } from "../types";
import ProductDetails from "../components/ProductDetails";

function Home() {
	const data = useLoaderData() as Producto[];

	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-slate-700">
					Lista de productos
				</h1>
				<Link
					to={"/product/create"}
					className="bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors ease-in-out duration-300 p-2 rounded"
				>
					Agregar producto
				</Link>
			</div>

			<div className="p-2">
				<table className="w-full mt-5 table-auto">
					<thead className="bg-slate-800 text-white">
						<tr>
							<th className="p-2">Producto</th>
							<th className="p-2">Precio</th>
							<th className="p-2">Disponibilidad</th>
							<th className="p-2">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{data.map((d) => (
							<ProductDetails key={d.id} item={d} />
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Home;
