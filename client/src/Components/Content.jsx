import React, { useEffect } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Tilt from 'react-tilt';

const Content = ({
	primary,
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	start,
	bottomImg,
	backgroundColor,
	linkTo,
	inverse,
	reverse,
	bigImage,
	id,
}) => {
	const initial = { opacity: 0, y: 30 };
	const transition = { delay: 0.3, duration: 0.6 };
	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

return (
    <ContentSec ref={ref} id='portfolio'>
	<Container>
        <ContentRow reverse={reverse}>
            <ContentColumn>
                <TextWrapper>
                    <TopLine
                        initial={initial}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        animate={animation}
                    >
                        {topLine.text}
                    </TopLine>
                    <Heading
                        initial={initial}
                        transition={transition}
                        animate={animation}
                        inverse={inverse}
                    >
                        {headline}
                    </Heading>
                    <Subtitle
                        initial={initial}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        animate={animation}
                        inverse={inverse}
                    >
                        {description}
                    </Subtitle>
                    <a href={linkTo}> 
                    <ContentButton
                        initial={initial}
                        transition={{ delay: 1, duration: 0.6 }}
                        animate={animation}
                        primary={primary}
                        backgroundColor={backgroundColor}
                    >
                        {buttonLabel}
                    </ContentButton>
                    </a>
                </TextWrapper>
            </ContentColumn>
            <ContentColumn
                initial={initial}
                transition={transition}
                animate={animation}
                bigImage={bigImage}
            >
                <Tilt className="Tilt" options={{ max: 20, scale: 1.01, speed: 200 }}>
                    <ImgWrapper backgroundColor={backgroundColor}>
                        <Img
                            src={img}
                            alt={alt}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </ImgWrapper>
                </Tilt>
            </ContentColumn>
        </ContentRow>
    </Container>
</ContentSec>
);
};

export default Content

const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;
    @media screen and (max-width: 960px) {
        padding: 0 30px;
    }
`;

export const ContentSec = styled.div`
	padding: 100px 0;
	background-color: #662d91aa;

	@media screen and (max-width: 768px) {
		padding: 70px 0;
	}
`;

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const ContentColumn = styled(motion.div)`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	> img {
		width: 300px;
		margin-left: -3px;
	}
`;

export const ContentButton = styled(motion.button)`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	border-radius: 25px;
	border: none;
	background: var(--secondary-color);
	cursor: pointer;
	color: white;
	&:hover {
		box-shadow: 0 0 32px 4px #cfcfcf;
		transition: box-shadow 0.3s ease-in;
	}
`;

export const ImgWrapper = styled(motion.div)`
	/* display: flex;
	justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
	max-height: 600px;
	justify-content: center;
	box-shadow: 0 0 32px 4px #dfdfdf;
	border-radius: 1rem;
	position: relative;
	background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#fafeff')}; */
	&:before {
		/* width: 100%;
		height: 100%;
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		background-image: url('./images/hero-pattern-bg.png');
		background-size: 100% auto;
		object-fit: cover; */
		display: none;
	}
`;

export const TopLine = styled(motion.div)`
	font-size: 0.9rem;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: var(--secondary-color);
`;

export const Img = styled(motion.img)`
	padding-right: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	border-radius: 2rem;
	object-fit: cover;
    width: 100%;
	height: 300px;
	max-height: 700px;
	z-index: 1;
`;

export const Heading = styled(motion.h2)`
	margin-bottom: 24px;
	font-size: 2rem;
	line-height: 1.1;
	font-weight: 600;
	color: var(--primary-color);
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const Subtitle = styled(motion.p)`
	max-width: 440px;
	margin-bottom: 35px;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? '#a9b3c1' : '#1c2237')};
`;