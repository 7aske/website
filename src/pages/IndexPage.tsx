import * as React from "react";
import { useEffect } from "react";
import { Slider } from "../components/slider/Slider";
import { Terminal, Version } from "../components/slider/Terminal";
import { Prompt } from "../components/slider/Prompt";
import Typist from "react-typist";
import { ContactInfoContainer } from "../components/slider/ContactInfoContainer";
import cookie from "react-cookies";

const content = <div>
	Hello! My name is <span className="theme-primary-text">Nikola</span>.<br/>
	I'm a nerd and an aspiring<br/>
	software engineer specializing in development of <span
	className="theme-primary-text">web systems</span>.<br/>
	EOF<br/>
	<Prompt/> <span className="theme-primary-text">date</span> '+Today is %A, %B %d, %Y.'<br/>
	<Version/> <br/>
	<Prompt/> <br/>
</div>;

export const IndexPage = () => {
	const visited = !!cookie.load("visited");

	useEffect(() => {

		if (!visited)
			cookie.save("visited", "1", {});
	}, []);

	const getContent = () => {
		if (visited)
			return content;
		else
			return <Typist cursor={{element: "█", blink: true}} avgTypingDelay={30}>
				{content}
			</Typist>;
	};

	return (
		<div>
			<Slider>
				<Terminal>
					<Prompt/> <span className="theme-primary-text">cat</span> &lt;&lt; EOF<br/>
					{getContent()}
				</Terminal>
				<ContactInfoContainer/>
			</Slider>
		</div>
	);
};
