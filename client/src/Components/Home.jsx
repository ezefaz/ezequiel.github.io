import React from "react";
import styled from "styled-components";
import home from "../Assets/home.png";
import play from "../Assets/play.png";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { homeAnimations, homeInfoAnimation } from "../animations";
import resume from "../Assets/resume.pdf";
import Typed from "react-typed";

function Home() {
	return (
		<Section id='home'>
			<Navbar />
			<motion.div
				variants={homeAnimations}
				transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
				className='home'>
				<div className='content'>
					<div className='title'>
						<h1>Ezequiel Faszczak</h1>
						<Typed
							className='typed'
							strings={["Full Stack web developer.", "Web Designer."]}
							typeSpeed={50}
							backSpeed={20}
							loop
						/>
					</div>
					<div className='subtitle-description'>
						<p>Click the button below to download CV.</p>
					</div>
					<a href={resume} download>
						<img src={play} alt='Play Button' />
					</a>
				</div>
			</motion.div>
			<motion.div
				className='info'
				transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
				variants={homeInfoAnimation}>
				<div className='grid'>
					<div className='col'>
						<strong>Full Name</strong>
						<p>Ezequiel Faszczak</p>
					</div>
					<div className='col'>
						<strong>Email</strong>
						<p>ezefaz@gmail.com</p>
					</div>
					<div className='col'>
						<strong>Mobile</strong>
						<p>+54 9 11 21763444</p>
					</div>
					<div className='col'>
						<strong>Adress</strong>
						<p>Buenos Aires,</p>
						<p>Argentina</p>
					</div>
					<div className='col'>
						<strong>Services</strong>
						<p>Full Stack</p>
						<p>Development</p>
					</div>
					<div className='col'>
						<strong>Working Hours</strong>
						<p>Monday to Friday</p>
						<p>Full Time</p>
					</div>
				</div>
			</motion.div>
		</Section>
	);
}

const Section = styled.section`
	background-image: url(${home});
	background-color: #886086b0;
	background-size: cover;
	min-height: 100vh;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;
	.home {
		height: 100%;
		.content {
			height: 100%;
			color: white;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 5rem;
			padding-left: 18rem;
			margin-top: 8rem;
			width: 70%;
			.title {
				h1 {
					font-size: 5rem;
					width: 80%;
					line-height: 6rem;
					word-wrap: break-word;
					height: 3rem;
					margin-bottom: 10rem;
				}
			}
			.subtitle-description {
        font-size: 1.5rem;
				p {
					width: 100%;
          font-size: 4rem
					margin-top: 5rem;
				}
			}
		}
	}
	.typed {
		font-size: 2rem;
		font-family: cursive;
	}
	.info {
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: var(--secondary-color);
		color: white;
		padding: 4rem;
		.grid {
			display: grid;
			grid-template-columns: repeat(3, 2fr);
			gap: 8rem;
			color: white;
		}
	}
	@media screen and (min-width: 280px) and (max-width: 1080px) {
		.home {
			.content {
				padding-left: 2rem;
				width: 100%;
				margin-bottom: 2rem;
				.title {
					h1 {
						font-size: 4rem;
						width: 100%;
						display: flex;
						line-height: 4rem;
						word-wrap: break-word;
						height: 12rem;
						margin: auto;
						padding-bottom: 2rem;
					}
				}
			}
		}
		.typed {
			font-size: 2rem;
			padding: 3.8rem;
			font-family: cursive;
		}
		.info {
			position: initial;
			.grid {
				grid-template-columns: 1fr;
			}
		}
	}
`;
export default Home;
