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

const Terminal = lazy(() => import("../components/slider/Terminal"));


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
						<Route exact path={"/experience"}>
							<Terminal>
								<span className="theme-accent2-text">2019-present</span><br/>
								Intern at Metropolitan University Faculty of Informational Technologies involved in
								development of service oriented informational systems using
								mostly <span className="theme-accent-text">Angular</span>, <span
								className="theme-accent-text">React</span>,
								<span className="theme-accent-text"> Spring Boot</span> and <span
								className="theme-accent-text">Flask</span>.
								Experience in setting up production environments and deploying to <span
								className="theme-accent-text">Ubuntu </span>
								and <span className="theme-accent-text">CentOS</span> servers. Huge deal of debugging
								and problem solving
								in production. Took part in database design, backup and migrations mostly <span
								className="theme-accent-text">MySQL</span>
								but also NoSQL databases such as <span className="theme-accent-text">MongoDB</span>.
								Mostly focused on developing
								clean backend API's with complex database structure.
								<br/>
								<span className="theme-accent2-text">2018-present</span><br/>
								Student at Metropolitan University Faculty of Informational Technologies department of
								software engineering.
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
