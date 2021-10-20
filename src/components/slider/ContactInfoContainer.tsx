import * as React from "react";
import { CSSProperties } from "react";
import { contactInfo } from "../../data/contact";
import { ContactInfo } from "./ContactInfo";

export const ContactInfoContainer = () => {
	return (
		<div style={style}>
			{contactInfo.map(e => <ContactInfo description={e.description} icon={e.icon} name={e.name} url={e.url} key={e.url}/>)}
		</div>
	);
};

const style: CSSProperties = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	textAlign: "center",
	justifyContent:"space-evenly",
	marginTop: "2em",
	maxWidth: "80vw",
};
