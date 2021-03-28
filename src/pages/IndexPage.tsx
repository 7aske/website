import * as React from "react";
import { useEffect, Suspense, lazy } from "react";
import { Slider } from "../components/slider/Slider";
import { Version } from "../components/slider/Terminal";
import { Prompt } from "../components/slider/Prompt";
import Typist from "react-typist";
import { ContactInfoContainer } from "../components/slider/ContactInfoContainer";
import cookie from "react-cookies";
import { Route, Switch, Redirect } from "react-router-dom";
import { Proj } from "../@types/entity/Proj";
import { Project } from "../components/Project";


const projs: Proj[] = [
	{
		name: "rzp-blog",
		href: "https://blog.rzp.7aske.xyz",
		description: "React blog",
	},
	{
		name: "zen",
		href: "https://zenmasaza.com",
		description: "Website with a webshop and blog",
	},
	{
		name: "springstrap",
		href: "https://github.com/7aske/springstrap",
		description: "Spring project code generator",
	},
	{
		name: "xinp",
		href: "https://github.com/7aske/xinp",
		description: "i3input replacement with Xresources support",
	},
	{
		name: "rgs",
		href: "https://github.com/7aske/rgs",
		description: "Batch git status checking tool",
	},
	{
		name: "agame",
		href: "https://github.com/7aske/agame",
		description: "Game from scratch in C",
	},
];

const Terminal = lazy(() => import("../components/slider/Terminal"))


export const IndexPage = () => {
	const visited = !!cookie.load("visited");

	useEffect(() => {

		if (!visited)
			cookie.save("visited", "1", {});
	}, []);

	const getContent = () => {
		if (visited)
			return <>
				Hello! My name is <span className="theme-primary-text">Nikola</span>.<br/>
				I'm a nerd and an aspiring<br/>
				software engineer specializing in development of <span
				className="theme-primary-text">web systems</span>.<br/>
				EOF<br/>
				<Prompt/> <span className="theme-primary-text">date</span> '+Today is %A, %B %d, %Y.'<br/>
				<Version/> <br/>
				<Prompt/> <br/>
			</>;
		else
			return <Typist cursor={{element: "█", blink: true}} avgTypingDelay={30}>
				Hello! My name is <span className="theme-primary-text">Nikola</span>.<br/>
				I'm a nerd and an aspiring<br/>
				software engineer specializing in development of <span
				className="theme-primary-text">web systems</span>.<br/>
				EOF<br/>
				<Prompt/> <span className="theme-primary-text">date</span> '+Today is %A, %B %d, %Y.'<br/>
				<Version/> <br/>
				<Prompt/> <br/>
			</Typist>;
	};

	return (
		<div>
			<Slider>
				<Suspense fallback={<div/>}>
					<Switch>
					<Route exact path="/">
						<Terminal key={"/"}>
							<Prompt/> <span className="theme-primary-text">cat</span> &lt;&lt; EOF<br/>
							{getContent()}
						</Terminal>
					</Route>
					<Route exact path="/projects">
						<Terminal key={"/projects"}>
							<Prompt/> <span className="theme-primary-text">cat</span> ~/projects<br/>
							<Typist cursor={{element: "█", blink: true}} avgTypingDelay={30}>
								{projs.map(proj => <Project key={proj.name} {...proj}/>)}
								<Prompt/> <br/>
							</Typist>
						</Terminal>
					</Route>
					<Route>
						<Redirect to="/"/>
					</Route>
				</Switch>
				<ContactInfoContainer/>
				</Suspense>
			</Slider>
		</div>
	);
};
