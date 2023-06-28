import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/Root";
import { Chirag } from "./pages/Chirag";
import { Julian } from "./pages/Julian";
import { Joan } from "./pages/Joan";

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
				path: "chirag",
				element: <Chirag />,
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
				element: <p>hello, pei </p>,
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
