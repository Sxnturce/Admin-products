import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./views/Home";
import Create from "./views/Create";
import { action as ProductAction } from "./actions/CreateAction";
import productLoader from "./loaders/ProductLoader";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{ index: true, element: <Home />, loader: productLoader },
			{ path: "product/create", element: <Create />, action: ProductAction },
		],
	},
]);
