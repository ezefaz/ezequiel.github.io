import React from "react";
import styled from "styled-components";
import service1 from "../Assets/service1.png";
import service2 from "../Assets/service2.png";
import service3 from "../Assets/service3.png";
import play from "../Assets/play.png";
import Title from "./Title";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { useScroll } from "../Components/useScroll";
import { servicesAnimation } from "../animations";

function Services() {
	const [element, controls] = useScroll();
	const data = [
		{
			type: "Design",
			text: "My goal is the development of good and attractive apps and wesbites that are fully responsive for all devices and have the functionality that fulfils client needs.",
			image: service1,
		},
		{
			type: "Coding",
			text: "Implementation of development technologies like frameworks (React and Next js), Redux, Styling, Animations, Express, Sequelize, Databases (SQL).",
			image: service2,
		},
		{
			type: "Marketing",
			text: "I perform marketing and SEO optimization so that projects can reach the maximum number of possible clients. I also have experience managing social networks and creating content.",
			image: service3,
		},
	];

	return (
		<Section id='services' ref={element}>
			<Title value='Services' />
			<div className='services'>
				{data.map(({ type, text, image }, index) => {
					return (
						<motion.div
							className='services__service'
							variants={servicesAnimation}
							animate={controls}
							transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
							whileInView={{ opacity: 1, y: 0 }}>
							<div className='services__service__image'>
								<img src={image} alt='service' />
							</div>
							<div className='services__service__title'>
								<span>0{index + 1}</span>
								<h2>{type}</h2>
							</div>
							<p className='services__service__description'>{text}</p>
							<img src={play} alt='Play' className='image-play' />
						</motion.div>
					);
				})}
			</div>
		</Section>
	);
}

const Section = styled.section`
	min-height: 100vh;
	.services {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		height: 100%;
		margin: 0 14rem;
		margin-top: 10rem;
		gap: 5rem;
		&__service {
			padding: 2rem;
			&:nth-of-type(3) {
				background-color: var(--primary-color);
				.services__service__title {
					span {
						color: white;
					}
				}
				.services__service__description {
					color: white;
				}
			}
			.image-play {
				margin-top: 2rem;
			}
			&__image {
				margin-bottom: 3rem;
			}
			&__title {
				color: var(--primary-color);
				font-weight: bolder;
			}
			h2 {
				font-size: 3rem;
				line-height: 2.5rem;
				margin-bottom: 5rem;
				color: var(--secondary-color);
			}
		}
		.services__service__description {
			font-family: cursive;
			font-size: 1.2rem;
			color: var(--secondary-color);
			margin-bottom: 2rem;
		}
		&__description {
			color: var(--secondary-color);
			margin-bottom: 2rem;
		}
	}
	@media screen and (min-width: 280px) and (max-width: 1080px) {
		.services {
			margin: 2rem 0;
			grid-template-columns: 1fr;
			gap: 2rem;
			padding-left: 0 2rem;
		}
	}
`;

export default Services;
