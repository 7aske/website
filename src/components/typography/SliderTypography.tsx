import * as React from "react";
import Typist from "react-typist";
import { CSSProperties } from "react";

type SliderTypographyProps = {
	text:any;
};
export const SliderTypography = (props: SliderTypographyProps) => {
	return (
		<div style={style}>
			<Typist avgTypingDelay={5}>
				{props.text}
			</Typist>
		</div>
	);
};

const style: CSSProperties = {
	height:"100vh",
	width:"100vw",
	position:"absolute",
	zIndex: 1,
}
