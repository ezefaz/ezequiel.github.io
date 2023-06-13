import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import skills1 from "../Assets/skills1.png";
import skills2 from "../Assets/skills2.png";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { useScroll } from "../Components/useScroll";
import { skillsBarAnimation } from "../animations";

function Skills() {
	const [element, controls] = useScroll();

	const skillsData = [
		{
			name: "creativity",
			amount: 90,
		},
		{
			name: "backend",
			amount: 90,
		},
		{
			name: "frontend",
			amount: 90,
		},
		{
			name: "design",
			amount: 90,
		},
		{
			name: "marketing",
			amount: 70,
		},
	];

	return (
		<Section id='skills' ref={element}>
			<Title value='Skills' />
			<div className='background'>
				<img src={skills1} alt='skills design' className='design1' />
				<img src={skills2} alt='skills design' className='design2' />
			</div>
			<div className='skills_title'>
				<p>My Skills</p>
				<h2>Check my main skills</h2>
			</div>
			<div className='skills'>
				<div className='skills_bars'>
					{skillsData.map(({ name, amount }) => {
						return (
							<motion.div
								className='skills_bars_bar'
								key={name}
								variants={skillsBarAnimation}
								animate={controls}
								transition={{ delay: 0.03, type: "tween", duration: 0.8 }}>
								<div className='container'>
									<progress value={amount} max='100' />
									<span>{name}</span>
								</div>
								<h3>{amount}%</h3>
							</motion.div>
						);
					})}
				</div>
				<div className='skills_content'>
					<p className='title'>Developing my main skills day by day.</p>

					<div className='description'>
						I specialize in crafting customized applications and web pages
						tailored to meet clients' unique requirements. I constantly strive
						to expand my expertise in cutting-edge development tools, enabling
						me to deliver a diverse range of innovative solutions for each
						project I undertake.
					</div>
				</div>
			</div>
		</Section>
	);
}

const Section = styled.section`
	min-height: 100vh;
	height: 140vh;
	background-color: var(--secondary-color);
	.background {
		position: relative;
		.design1 {
			position: absolute;
			right: 0;
			z-index: 1;
		}
		.design2 {
			position: absolute;
			left: 0;
			top: 20rem;
			z-index: 1;
		}
	}
	.sideTitle {
		h1 {
			color: white;
			font-size: 9rem;
			z-index: 2;
		}
	}
	.skills_title {
		padding: 6rem 10rem;
		p {
			text-transform: uppercase;
			letter-spacing: 0.2rem;
			color: var(--primary-color);
		}
		h2 {
			color: white;
			font-size: 2rem;
		}
	}
	.skills {
		display: flex;
		padding: 0 20rem;
		gap: 10rem;
		&_bars {
			transform: rotate(-90deg);
			width: max-content;
			height: max-content;
			display: flex;
			flex-direction: column;
			gap: 4rem;
			&_bar {
				display: flex;
				flex-direction: row-reverse;
				gap: 1rem;
				.container {
					display: flex;
					flex-direction: column;
					gap: 2.5rem;
					span {
						text-transform: uppercase;
						letter-spacing: 0.2rem;
						color: var(--primary-color);
					}
					progress {
						width: 30rem;
						-webkit-appearance: none;
						appearance: none;
						&::-webkit-progress-bar {
							height: 3rem;
							background-color: white;
						}
						&::-webkit-progress-value {
							background-color: var(--primary-color);
						}
					}
				}
				h3 {
					transform: rotate(90deg);
					color: white;
					font-size: 2rem;
				}
			}
		}
		&_content {
			display: flex;
			flex-direction: column;
			gap: 2rem;
			color: white;
			z-index: 2;
			.title {
				font-weight: bolder;
				letter-spacing: 0.3rem;
				font-size: 1.5rem;
				width: 80%;
				color: var(--primary-color);
			}
		}
	}
	.description {
		font-size: 1.2rem;
		font-family: cursive;
		width: 90%;
	}
	@media screen and (min-width: 280px) and (max-width: 1080px) {
		overflow-x: hidden;
		padding: 2rem 0;
		height: max-content;
		.background {
			display: none;
		}
		.skills_title {
			padding: 2rem;
			text-align: center;
			h2 {
				font-size: 1.5rem;
			}
		}
		.skills {
			padding: 0;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			&_bars {
				padding: 0.2rem;
				gap: 0;
				align-items: center;
				justify-content: center;
				&_bar {
					.container {
						gap: 1rem;
						progress {
							width: 12rem;
							height: 0.5rem;
							&::-webkit-progress-bar {
								height: 0.7rem;
							}
						}
					}
					h3 {
						font-size: 1rem;
					}
				}
			}
			&_content {
				padding: 0 4rem;
			}
		}
	}
`;

export default Skills;
