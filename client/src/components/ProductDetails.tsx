import { Link, Form, useFetcher } from "react-router-dom";
import formatCurrency from "../helpers";
import { Producto } from "../types";

type ProductProp = {
	item: Producto;
};

function ProductDetails({ item }: ProductProp) {
	const fetcher = useFetcher();
	const available = item.available;
	return (
		<>
			<tr className="border-b ">
				<td className="p-3 text-lg text-gray-800">{item.name}</td>
				<td className="p-3 text-lg text-gray-800">
					{formatCurrency(item.price)}
				</td>
				<td className="p-3 text-lg text-gray-800">
					<fetcher.Form method="POST">
						<button
							type="submit"
							name="id"
							value={item.id}
							className={`${
								available ? "text-black" : "text-red-600"
							} rounded-lg p-2 text-sm uppercase font-bold w-full cursor-pointer border`}
						>
							{available ? "Disponible" : "No disponible"}
						</button>
					</fetcher.Form>
				</td>
				<td className="p-3 text-lg text-gray-800 flex gap-4 items-center justify-center ">
					<Link
						to={`product/${item.id}/editar`}
						className="text-bold text-white bg-indigo-600 rounded px-2 py-1 hover:bg-indigo-700 transition-colors ease-in-out duration-300 text-[0.95rem]"
					>
						Editar
					</Link>
					<Form method="POST" action={`product/${item.id}/eliminar`}>
						<input
							type="submit"
							value="Eliminar"
							className="text-bold text-white bg-red-600 rounded px-2 py-1 hover:bg-red-700 transition-colors ease-in-out duration-300 text-[0.95rem] cursor-pointer"
						/>
					</Form>
				</td>
			</tr>
		</>
	);
}

export default ProductDetails;
