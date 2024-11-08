import formatCurrency from "../helpers";
import { Producto } from "../types";

type ProductProp = {
	item: Producto;
};

function ProductDetails({ item }: ProductProp) {
	const available = item.available;
	return (
		<>
			<tr className="border-b ">
				<td className="p-3 text-lg text-gray-800">{item.name}</td>
				<td className="p-3 text-lg text-gray-800">
					{formatCurrency(item.price)}
				</td>
				<td className="p-3 text-lg text-gray-800">
					{available ? "Disponible" : "No disponible"}
				</td>
				<td className="p-3 text-lg text-gray-800 "></td>
			</tr>
		</>
	);
}

export default ProductDetails;
