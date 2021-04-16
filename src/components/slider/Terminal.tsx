import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars";


export const Version = () => {
	const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const date = new Date();
	return <span>Today is {weekdays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}.</span>;
};

type TerminalProps = {} & React.PropsWithChildren<any>;
const Terminal = (props: TerminalProps) => {
	return (
			<div className="terminal flow-text no-select theme-black left-align animate__animated animate__fadeIn animate__fast">
				<Scrollbars style={{height:"100%",width:"100%"}}>
				{props.children}
				</Scrollbars>
			</div>
	);
};

export default Terminal;
