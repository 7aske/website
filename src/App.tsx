import React from "react";
import { Router } from "./router/Router";
import ReactGA from "react-ga";
import { HashRouter } from "react-router-dom";
import { Footer } from "./components/navbar/Footer";

ReactGA.initialize("G-YZCG7E8WQ6");

function App() {
	ReactGA.pageview(window.location.pathname + window.location.search);
	return (
		<main>
			<HashRouter>
				<Router/>
				<Footer/>
			</HashRouter>
		</main>
	);
}

export default App;
