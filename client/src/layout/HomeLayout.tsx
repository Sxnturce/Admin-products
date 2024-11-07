import { Outlet, Link } from "react-router-dom";

function HomeLayout() {
	return (
		<>
			<header className="bg-slate-800 w-full">
				<div className="mx-auto max-w-6xl py-10">
					<Link to={"/"}>
						<h1 className="text-4xl text-center text-white font-extrabold">
							Administrador de Productos
						</h1>
					</Link>
				</div>
			</header>
			<main className="mt-10 mx-auto max-w-6xl p-10 shadow bg-white">
				<Outlet />
			</main>
		</>
	);
}

export default HomeLayout;
