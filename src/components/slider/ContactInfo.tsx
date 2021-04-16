import * as React from "react";
import { CSSProperties } from "react";
import { Contact } from "../../data/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

interface ContactInfoProps extends Contact {
}

export const ContactInfo = (props: ContactInfoProps) => {
	return (
		<div style={style} key={props.url}>
			<a rel="noreferrer" target="_blank" className="hover-text" data-for={`contact-${props.name}`} data-tip={props.description} href={props.url}>
				<FontAwesomeIcon size={"3x"} icon={props.icon}/>
			</a>
			<ReactTooltip id={`contact-${props.name}`} effect="solid" place="bottom" type="dark"/>
		</div>
	);
};

const style: CSSProperties = {
	width: "5em"
};
