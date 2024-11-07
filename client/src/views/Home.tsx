import { Link } from "react-router-dom";

function Home() {
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
		</>
	);
}

export default Home;
