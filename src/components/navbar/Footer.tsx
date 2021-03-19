import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";

export const Footer = () => {
	return (
		<footer className="footer theme-grey">
			<ul className="center">
				<li className="theme-black-text">
					<a href="https://reactjs.org/" target="_blank">Powered by
						<FontAwesomeIcon className="theme-black-text" icon={faReact}/>
					</a>
				</li>
			</ul>
		</footer>
	);
};
