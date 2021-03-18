import React from "react";
import { Router } from "./router/Router";
import ReactGA from "react-ga";
import { Navbar } from "./components/navbar/Navbar";
import { HashRouter } from "react-router-dom";

ReactGA.initialize("G-YZCG7E8WQ6");

function App() {
	ReactGA.pageview(window.location.pathname + window.location.search);
	return (
		<main>
			<HashRouter>
				<Router/>
				<Navbar/>
			</HashRouter>
		</main>
	);
}

export default App;
