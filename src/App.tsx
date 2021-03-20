import React from "react";
import ReactGA from "react-ga";
import { HashRouter } from "react-router-dom";
import { Footer } from "./components/navbar/Footer";
import { IndexPage } from "./pages/IndexPage";

ReactGA.initialize("G-YZCG7E8WQ6");

function App() {
	ReactGA.pageview(window.location.pathname + window.location.search);
	return (
		<main>
			<HashRouter>
				<IndexPage/>
				<Footer/>
			</HashRouter>
		</main>
	);
}

export default App;
