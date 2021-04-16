import * as React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar theme-grey">
			<div className="nav-wrapper">
				<ul className="center">
					<li><NavLink activeClassName="active" to="/index">index</NavLink></li>
					<li><NavLink activeClassName="active" to="/projects">projects</NavLink></li>
					<li><NavLink activeClassName="active" to="/experience">experience</NavLink></li>
				</ul>
			</div>
		</nav>
	);
};
