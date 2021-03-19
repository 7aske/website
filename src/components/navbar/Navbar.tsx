import * as React from "react";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = {};
export const Navbar = (props: NavbarProps) => {
	const location = useLocation();
	const getLink = () => {
		return location.pathname === "/projects" ?
			<Link to="/">index</Link> : <Link to="/projects">projects</Link>;
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
