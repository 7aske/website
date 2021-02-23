import * as React from "react";
import { CSSProperties } from "react";
import Typist from "react-typist";

export const Prompt = () => {
	return (<>
		<span className="theme-primary-text">nik</span>@<span className="theme-primary-text">7aske.com</span> ~ $
	</>);
};

export const Version = () => {
	return <span>5.9.14-arch1-1</span>;
};

export const WelcomeBox = () => {
	return (
		<div style={style} className="flow-text theme-grey animate__animated animate__fadeIn">
			<div className="left-align">
				<Prompt/> <span className="theme-primary-text">cat</span> &lt;&lt; EOF<br/>
				<Typist cursor={{element: "█", blink: true}} avgTypingDelay={30}>
					Hello! My name is <span className="theme-primary-text">Nikola</span>.<br/>
					I'm a nerd and an aspiring<br/>
					software engineer specializing in development of <span
					className="theme-primary-text">web systems</span>.<br/>
					EOF<br/>
					<Prompt/> <span className="theme-primary-text">uname</span> -r<br/>
					<Version/> <br/>
					<Prompt/> <br/>
				</Typist>
			</div>
		</div>
	);
};

const style: CSSProperties = {
	padding: "0.5em",
	height: "16em",
	width: "30em",
	maxWidth: "90vw",
	zIndex: 2,
	boxShadow: "0px 0px 10px rgba(0,0,0,0.6)",
};
