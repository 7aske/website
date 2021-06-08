import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons/faFileDownload";
import cv from "../assets/pdf/cv_nikola_tasic.pdf"

export interface Contact {
	url: string;
	name: string;
	icon: any;
	description?: string;
}

export const contactInfo: Contact[] = [
	{
		icon: faAt,
		url: "mailto://nik@7aske.com",
		name: "",
		description: "Email",
	},
	{
		icon: faGithub,
		url: "https://github.com/7aske",
		name: "",
		description: "GitHub",
	}, {
		icon: faLinkedin,
		url: "https://www.linkedin.com/in/7aske/",
		name: "",
		description: "LinkedIn",
	}, {
		icon: faFacebook,
		url: "https://facebook.com/7aske",
		name: "",
		description: "Facebook",
	}, {
		icon: faInstagram,
		url: "https://instagram.com/7aske",
		name: "",
		description: "Instagram",
	}, {
		icon: faFileDownload,
		url: cv,
		name: "",
		description: "Download CV",
	}];

