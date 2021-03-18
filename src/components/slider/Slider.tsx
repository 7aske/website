import * as React from "react";
import { CSSProperties } from "react";
import { ContactInfoContainer } from "./ContactInfoContainer";

type SliderProps = {} & React.PropsWithChildren<any>;
export const Slider = (props: SliderProps) => {
	return (
		<div style={style}>
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
