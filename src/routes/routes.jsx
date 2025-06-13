import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../pages/PrivateRoute";
import Categories from "../pages/Categories";
import Profile from "../pages/Profile";
import Jobs from "../pages/Jobs";
import Pricing from "../pages/Pricing";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/signup",
				Component: SignUp,
			},
			{
				path: "/profile",
				Component: Profile,
			},
			{
				path: "/dashboard",
				element: (
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				),
			},
			{
				path: "/categories",
				Component: Categories,
			},
			{
				path: "/jobs",
				Component: Jobs,
			},
			{
				path: "/upgrade",
				Component: Pricing,
			},
		],
	},
]);

export default router;
