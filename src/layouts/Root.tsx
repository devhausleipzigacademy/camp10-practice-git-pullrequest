import { Outlet, Link } from "react-router-dom";

export function RootLayout() {
	return (
		<div className="h-screen flex flex-col">
			<header className="bg-slate-700 text-white p-4 flex gap-4">
				<Link to="/">Home</Link>
				<Link to="/chirag">Chirag</Link>
				<Link to="/Julian">Julian</Link>
				<Link to="/joan">Joan</Link>
				<Link to="/pei">Pei</Link>
				<Link to="/felix">Felix</Link>
				<Link to="/jacob">Jacob</Link>
				<Link to="/christian">Christian</Link>
				<Link to="/hendryk">Hendryk</Link>
				<Link to="/tobi">Tobi</Link>
			</header>
			<div className="flex-1 flex">
				<main className="p-4">
					<Outlet />
				</main>
			</div>
			<footer className="bg-slate-700 text-white p-4">Footer</footer>
		</div>
	);
}
