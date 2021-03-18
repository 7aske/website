import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { IndexPage } from "../pages/IndexPage";
import { ProjectsPage } from "../pages/ProjectsPage";

export const Router = () => {
	return (
			<Switch>
				<Route exact path="/">
					<IndexPage/>
				</Route>
				<Route exact path="/projects">
					<ProjectsPage/>
				</Route>
			</Switch>
	);
};
