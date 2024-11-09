import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./views/Home";
import Create from "./views/Create";
import {
	action as ProductAction,
	actionEdit,
	actiondelete,
	actionPatch,
} from "./actions/CreateAction";
import { productLoader, editProductLoader } from "./loaders/productLoader";
import Editar from "./views/Editar";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: productLoader,
				action: actionPatch,
			},
			{ path: "product/create", element: <Create />, action: ProductAction },
			{
				path: "product/:id/editar",
				element: <Editar />,
				loader: editProductLoader,
				action: actionEdit,
			},
			{
				path: "product/:id/eliminar",
				action: actiondelete,
			},
		],
	},
]);
