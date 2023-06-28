import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/Root";
import { Charizard } from "./pages/Charizard";
import { Julian } from "./pages/Julian";
import { Hendryk } from "./pages/Hendryk";
import { Tobi } from "./pages/Tobi";
import { Jacob } from "./pages/Jacob";
import { Christian } from "./pages/Christian";
import { Pei } from "./pages/Pei";
import { Joan } from "./pages/Joan";
import Felix from "./pages/Felix";

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
				path: "hendryk",
				element: <Hendryk />,
			},
			{
				path: "joan",
				element: <Joan />,
			},
			{
				path: "pei",
				element: <Pei />,
			},
			{
				path: "felix",
				element: <Felix />,
			},
			{
				path: "jacob",
				element: <Jacob />,
			},
			{
				path: "christian",
				element: <Christian />,
			},

			{
				path: "tobi",
				element: <Tobi />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
