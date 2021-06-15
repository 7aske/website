import * as React from "react";
import { CSSProperties } from "react";
import { Contact } from "../../data/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";
import { randomString } from "../../utils/util";

interface ContactInfoProps extends Contact {
}

export const ContactInfo = (props: ContactInfoProps) => {
	const id = randomString(8);
	console.log(id);
	return (
		<div className="contact-link" key={props.url}>
			<a rel="noreferrer" target="_blank" className="hover-text" data-for={`contact-${id}`} data-tip={props.description} href={props.url}>
				<FontAwesomeIcon size={"3x"} icon={props.icon}/>
			</a>
			<ReactTooltip id={`contact-${id}`} effect="solid" place="bottom" type="dark"/>
		</div>
	);
};
