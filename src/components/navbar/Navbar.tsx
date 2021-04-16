import * as React from "react";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = {};
export const Navbar = (props: NavbarProps) => {
	const location = useLocation();
	const getLink = () => {
		if (location.pathname === "/")
			return <Link to="/projects">projects</Link>;
		if (location.pathname === "/projects")
			return <Link to="/experience">experience</Link>
		if (location.pathname === "/experience")
			return <Link to="/">index</Link>
		return <Link to="/index">index</Link>;
	};

	return (
		<nav className="navbar theme-grey">
			<div className="nav-wrapper">
				<ul className="center">
					<li>{getLink()}</li>
				</ul>
			</div>
		</nav>
	);
};
