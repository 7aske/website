import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import "../node_modules/animate.css/animate.min.css";
import "./assets/styles/materialize-css-override.scss";
import "./assets/styles/index.scss";

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById("root"),
);
serviceWorker.unregister();
