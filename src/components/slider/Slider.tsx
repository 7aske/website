import * as React from "react";
import { CSSProperties } from "react";
import { WelcomeBox } from "./WelcomeBox";
import { ContactInfoContainer } from "./ContactInfoContainer";

export const Slider = () => {
	return (
		<div style={style}>
			<WelcomeBox/>
			<ContactInfoContainer/>
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
