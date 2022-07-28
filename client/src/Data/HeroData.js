import psicoapp from '../Assets/psicoapp.jpg'
import countries from '../Assets/countries.jpg'

export const heroOne = {
	id: 'projects',
	topLine: {
		text: 'Groupal project',
	},
	headline: 'PSICOAPP',
	description: 'PsicoApp is a web application that connects patients with psychologists from all over Argentina remotely, being able to create and log in with a patient or psychologist account, schedule, pay appointments with psychologists and even chat live with them.',
	buttonLabel: 'View Project',
	imgStart: 'start',
	img: psicoapp,
	backgroundColor: 'linear-gradient(	150deg,#c99fff -20%,#4a4eff)',
	start: 'true',
    linkTo: 'https://psico-app.vercel.app/'
};

export const heroTwo = {
	reverse: true,
	topLine: {
		text: 'Full Stack App',
	},
	headline: 'Countries App',
	description:
		"Objective: to make an application where you can see the different available countries along with relevant information about them using an external API, and from it you can, among other things: search for countries, filter / sort them and create activities.",
	buttonLabel: 'View Project',

	linkTo: 'https://pi-countries-pied.vercel.app/',
	imgStart: 'start',
	img: countries,
	backgroundColor: 'linear-gradient(	140deg	,#ffaf73 30%,#fffecc 120%)',

	start: 'true',
};

export const heroThree = {
	topLine: {
		text: 'Development',
	},
	headline: "Innovative API's ",
	description:
		'Our team has amazing developers that can turn any design sketches and ideas into a fully functioning product.',
	buttonLabel: 'View Project',

	linkTo: '/download',
	imgStart: '',
	backgroundColor: 'linear-gradient(104deg, rgba(151,147,218,1) 0%, rgba(183,137,205,1) 100%)',
	img: {psicoapp},
	start: 'true',
};

export const heroFour = {
	reverse: true,
	topLine: {
		text: 'Photography and Development',
	},
	headline: 'New ECommerce systems',
	description: 'We take your products and make them look better than they already are!',
	buttonLabel: 'View Project',

	linkTo: '/more',
	imgStart: '',
	backgroundColor: 'linear-gradient(225deg,#0abac2,#b2de94)',
	img: {psicoapp},
	start: 'true',
};