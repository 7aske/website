import * as React from "react";
import { CSSProperties } from "react";
import { Contact } from "../../data/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

interface ContactInfoProps extends Contact {
}

export const ContactInfo = (props: ContactInfoProps) => {
	return (
		<div style={style} key={props.url} className="animate__animated animate__fadeIn">
			<a target="_blank" className="hover-text" data-tip={props.description} href={props.url}>
				<FontAwesomeIcon size={"3x"} icon={props.icon}/>
			</a>
			<ReactTooltip effect="solid" place="bottom" type="light"/>
		</div>
	);
};

const style: CSSProperties = {
	width: "5em"
};
