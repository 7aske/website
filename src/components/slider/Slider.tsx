import * as React from "react";
import { CSSProperties } from "react";
import { Navbar } from "../navbar/Navbar";

type SliderProps = {} & React.PropsWithChildren<any>;
export const Slider = (props: SliderProps) => {
	return (
		<div style={style}>
			<Navbar/>
			{props.children}
		</div>
	);
};

const style: CSSProperties = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	minHeight: "100vh",
	minWidth: "100vw",
	overflowX: "hidden",
};
