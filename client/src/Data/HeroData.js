import psicoapp from "../Assets/psicoapp.jpg";
import countries from "../Assets/countries.jpg";
import memories from "../Assets/memories-image.png";
import marketify from "../Assets/marketify.png";
import palermojai from "../Assets/palermojai.png";

export const heroOne = {
	id: "projects",
	topLine: {
		text: "Groupal project",
	},
	headline: "PSICOAPP",
	description:
		"PsicoApp is a web application that connects patients with psychologists from all over Argentina remotely, being able to create and log in with a patient or psychologist account, schedule, pay appointments with psychologists and even chat live with them.",
	buttonLabel: "View Project",
	imgStart: "start",
	img: psicoapp,
	backgroundColor: "linear-gradient(	150deg,#c99fff -20%,#4a4eff)",
	start: "true",
	linkTo: "https://psico-app.vercel.app/",
};

export const heroTwo = {
	reverse: true,
	topLine: {
		text: "Full Stack App",
	},
	headline: "Countries App",
	description:
		"Objective: to make an application where you can see the different available countries along with relevant information about them using an external API, and from it you can, among other things: search for countries, filter / sort them and create activities.",
	buttonLabel: "View Project",

	linkTo: "https://pi-countries-app-kappa.vercel.app/home",
	imgStart: "start",
	img: countries,
	backgroundColor: "linear-gradient(	140deg	,#ffaf73 30%,#fffecc 120%)",

	start: "true",
};

export const heroThree = {
	topLine: {
		text: "MERN Full Stack Application",
	},
	headline: "Memories App",
	description:
		'Using React, Node.js, Express & MongoDB. The App is called "Memories" and it is a simple social media app that allows users to post interesting events that happened in their lives. You can create an account, create posts, comment and like other users posts, check their profile and others awesome functionalities.',
	buttonLabel: "View Project",

	linkTo: "https://memories-events-app.netlify.app/posts",
	imgStart: "",
	backgroundColor:
		"linear-gradient(104deg, rgba(151,147,218,1) 0%, rgba(183,137,205,1) 100%)",
	img: memories,
	start: "true",
};

export const heroFour = {
	reverse: true,
	topLine: {
		text: "Digital Marketing Agency",
	},
	headline: "Marketify",
	description:
		"Marketify is a website specialized on startups grow. You can find diferent digital marketing services, join the platform and grow your business.",
	buttonLabel: "View Project",

	linkTo: "https://marketify-website.netlify.app/",
	imgStart: "",
	backgroundColor: "linear-gradient(225deg,#0abac2,#b2de94)",
	img: marketify,
	start: "true",
};

export const heroFive = {
	reverse: true,
	topLine: {
		text: "Rental Apartment Booking Website",
	},
	headline: "PalermoJai",
	description:
		"PalermoJai is a company that offers fully furnished rental apartments at the hearth of Palermo, Buenos Aires. The website includes an integrated booking system, availabilty in Spanish, English and Portuguese, reviews system and more.",
	buttonLabel: "View Project",

	linkTo: "https://palermojai.com/",
	imgStart: "",
	backgroundColor: "linear-gradient(225deg,#0abac2,#b2de94)",
	img: palermojai,
	start: "true",
};
