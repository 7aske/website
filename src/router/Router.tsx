import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { IndexPage } from "../pages/IndexPage";

export const Router = () => {
	return (
		<HashRouter hashType={"noslash"}>
			<Switch>
				<Route exact path="/">
					<IndexPage/>
				</Route>
			</Switch>
		</HashRouter>
	);
};
