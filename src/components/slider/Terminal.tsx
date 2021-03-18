import * as React from "react";


export const Version = () => {
	const weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const date = new Date();
	return <span>Today is {weekdays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}.</span>;
};

type TerminalProps = {} & React.PropsWithChildren<any>;
export const Terminal = (props: TerminalProps) => {
	return (
		<div className="terminal flow-text no-select theme-black animate__animated animate__fadeIn">
			<div className="left-align">
				{props.children}
			</div>
		</div>
	);
};