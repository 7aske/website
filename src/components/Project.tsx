import * as React from "react";
import { Proj } from "../@types/entity/Proj";
import ReactTooltip from "react-tooltip";

export const Project = ({href, name, description}: Proj) => {
	return (<>
		<a target="_blank" data-for={name} data-tip={description} href={href}>{name}</a><br/>
		<ReactTooltip id={name} effect="solid" place="right" type="dark"/>
	</>);
};
