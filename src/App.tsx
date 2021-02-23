import React from "react";
import { Router } from "./router/Router";
import ReactGA from "react-ga";
ReactGA.initialize("G-YZCG7E8WQ6");
function App() {
	ReactGA.pageview(window.location.pathname + window.location.search);
	return (
		<main>
			<Router/>
		</main>
	);
}

export default App;
