import React from 'react'
import styled from 'styled-components'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { useScroll } from '../Components/useScroll'
import { footerLogoAnimations, footerTextAnimations } from '../animations'

function Footer() {
  const [element, controls] = useScroll();

  return (
    <Foot ref={element}>
      <motion.span
        animate={controls}
        variants={footerTextAnimations}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        &copy; Created by Ezequiel Faszczak
      </motion.span>
      <motion.div
        className="footer__social__icons"
        animate={controls}
        variants={footerLogoAnimations}
        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <a href='https://www.instagram.com/'> 
        <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/ezequiel-faszczak-1537b01bb/"> 
        <BsLinkedin />
        </a>
        <a href="https://github.com/ezefaz"> 
        <BsGithub />
        </a>
      </motion.div>
    </Foot>
  );
}

const Foot = styled.footer`
background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    color: white;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      color: white;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
  }
`

export default Footer