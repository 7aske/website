import * as React from "react";
import { Prompt } from "../components/slider/Prompt";
import Typist from "react-typist";
import { Terminal } from "../components/slider/Terminal";
import { Slider } from "../components/slider/Slider";
import ReactTooltip from "react-tooltip";
import { ContactInfoContainer } from "../components/slider/ContactInfoContainer";

export interface Proj {
	name: string;
	href: string;
	description?: string;
}
const projs: Proj[] = [
	{
		name: "rzp-blog",
		href: "https://blog.rzp.7aske.xyz",
		description: "React blog"
	},
	{
		name: "zen",
		href: "https://zenmasaza.com",
		description: "Website with a webshop and blog"
	},
	{
		name: "springstrap",
		href:"https://github.com/7aske/springstrap",
		description: "Spring project code generator"
	},
	{
		name:"xinp",
		href:"https://github.com/7aske/xinp",
		description: "i3input replacement with Xresources support"
	},
	{
		name:"rgs",
		href:"https://github.com/7aske/rgs",
		description: "Batch git status checking tool"
	},
	{
		name:"agame",
		href:"https://github.com/7aske/agame",
		description: "Game from scratch in C"
	}
]

const Project = ({href, name, description}: Proj) => {
	return (<>
		<a target="_blank" data-tip={description} href={href}>{name}</a><br/>
		<ReactTooltip effect="solid" place="right" type="dark"/>
	</>);
}

export const ProjectsPage = () => {
	return (
		<div>
			<Slider>
				<Terminal>
					<Prompt/> <span className="theme-primary-text">cat</span> ~/projects<br/>
					<Typist cursor={{element: "█", blink: true}} avgTypingDelay={30}>
						{projs.map(proj => <Project key={proj.name} {...proj}/>)}
						<Prompt/> <br/>
					</Typist>
				</Terminal>
			</Slider>
		</div>
	);
};
