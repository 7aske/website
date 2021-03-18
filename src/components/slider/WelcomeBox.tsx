import * as React from "react";
import { CSSProperties } from "react";
import Typist from "react-typist";

export const Prompt = () => {
	return (<>
		<a className="mail-prompt" href="mailto:nik@7aske.com">
			<span className="user-host-prompt">&nbsp;nik@7aske.com </span><span className="arrow"/>
			<span className="dir"> ~ </span><span className="arrow"/></a>
	</>);
};

export const Version = () => {
	const weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const date = new Date();
	return <span>Today is {weekdays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}.</span>;
};

export const WelcomeBox = () => {
	return (
		<div style={style} className="flow-text no-select theme-black animate__animated animate__fadeIn">
			<div className="left-align">
				<Prompt/> <span className="theme-primary-text">cat</span> &lt;&lt; EOF<br/>
				<Typist cursor={{element: "█", blink: true}} avgTypingDelay={30}>
					Hello! My name is <span className="theme-primary-text">Nikola</span>.<br/>
					I'm a nerd and an aspiring<br/>
					software engineer specializing in development of <span
					className="theme-primary-text">web systems</span>.<br/>
					EOF<br/>
					<Prompt/> <span className="theme-primary-text">date</span> '+Today is %A, %B %d, %Y.'<br/>
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
