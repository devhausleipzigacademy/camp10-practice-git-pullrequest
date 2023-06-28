import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/Root";
import { Charizard } from "./pages/Charizard";
import { Julian } from "./pages/Julian";
import { Pei } from "./pages/Pei";
import { Joan } from "./pages/Joan";
import { Pei } from "./pages/Pei";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <p>hello, camp10 </p>,
			},
			{
				path: "charizard",
				element: <Charizard />,
			},
			{
				path: "julian",
				element: <Julian />,
			},
			{
				path: "joan",
				element: <Joan />,
			},
			{
				path: "pei",
				element: <Pei />
			},
			{
				path: "felix",
				element: <p>hello, felix </p>,
			},
			{
				path: "jacob",
				element: <p>hello, jacob </p>,
			},
			{
				path: "christian",
				element: <p>hello, christian</p>,
			},
			{
				path: "hendryk",
				element: <p>hello, hendryk </p>,
			},
			{
				path: "tobi",
				element: <p>hello, tobi </p>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
