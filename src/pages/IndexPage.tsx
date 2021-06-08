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
		// eslint-disable-next-line
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
						<Route exact path="/index">
							<Terminal key={"/index"}>
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
							<Terminal key={"/experience"}>
								<Prompt/> <span className="theme-primary-text">cat</span> ~/experience<br/>
								<span className="date-subheader">Feb 2020 -&gt; Aug 2020</span><br/>
								Developed and deployed a web system consisting of a website, webshop and a blog for a
								local massage centre.
								<br/>
								<br/>
								<span className="date-subheader">2019 -&gt; <span
									className="theme-accent3-text">undefined</span></span><br/>
								Intern at Metropolitan University Faculty of Information Technologies involved in
								development of service oriented informational systems using
								mostly <span className="theme-accent-text">Angular</span>, <span
								className="theme-accent-text">React</span>,
								<span className="theme-accent-text"> Spring Boot</span> and <span
								className="theme-accent-text">Flask</span>.
								Experience in setting up production environments and deploying to <span
								className="theme-accent-text">Ubuntu </span>
								and <span className="theme-accent-text">CentOS</span> servers. Took part in a great deal
								of problem solving
								and debugging of production systems. Experience in database design, backup and
								migrations mostly <span
								className="theme-accent-text">MySQL </span>
								but also NoSQL databases such as <span className="theme-accent-text">MongoDB</span>.
								Mostly focused on developing clean backend API's with complex database structure.
								<br/>
								<br/>
								<span className="date-subheader">2018 -&gt; <span
									className="theme-accent3-text">undefined</span></span><br/>
								Student at Metropolitan University Faculty of Information Technologies department of
								software engineering.
								<br/>
								<br/>
								<Prompt/><br/>
							</Terminal>
						</Route>
						<Route exact path={"/about"}>
							<Terminal key={"/experience"}>
								<Prompt/> <span className="theme-primary-text">pdftotext</span> \<br/>
								&gt; ~/about.pdf
								/dev/stdout<br/>
								<br/>
								Hi, my name is Nikola and im born
								on 24th of May 1995. I’m a nerd
								and an aspiring software engineer
								specializing in the development of
								web systems. Among the wide
								spectrum of my interests i would
								emphasize backend web
								development, dev-ops, Linux
								systems and clean reusable
								architectures. I base my
								knowledge off of late Richard
								Feynman’s quote ‘‘What I cannot
								create, I do not understand.’’
								which can be observed on my
								github/website. Also Robert C.
								Martin had an enormous influence
								on me with his book Clean Code
								which felt eye-opening and
								relatable on so many levels. I think
								I am honest, enthusiastic, easy to
								work with, more than eager to
								learn more and also wiling to think
								outside the box to solve any
								problem. Also I am a big advocate
								on open-source software. Besides
								programming im interested in
								space exploration and
								documentary photography.
								<br/>
								<Prompt/> <br/>
							</Terminal>
						</Route>
						<Route>
							<Redirect to="/index"/>
						</Route>
					</Switch>
					<ContactInfoContainer/>
				</Suspense>
			</Slider>
		</div>
	);
};
