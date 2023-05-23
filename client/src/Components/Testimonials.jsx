import React, { useState } from 'react'
import styled from 'styled-components'
import placeholder from '../Assets/placeholder.png'
import testimonial1 from '../Assets/testimonial1.png'
import testimonial2 from '../Assets/testimonial2.png'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { useScroll } from '../Components/useScroll'
import { testimonialAnimation } from '../animations'

function Testimonials() {

  const [element, controls] = useScroll();

  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: 'Developer',
      name: 'Tomas',
      review: "Ezequiel is an excellent colleague, I shared a team with him, although not in the same sector within the project, beyond this I could see that he knows how to handle himself very well within a team. He is a design specialist, he likes things to look good and I notice good UX/UI oriented programming. On the other hand, Ezequiel handles good communication, listens actively and he is always willing to learn new tools.",
    },
    {
      designation: 'Developer',
      name: 'Miguel',
      review: "I was part of the same team as Ezequiel in a project and he was a key person in the frontend, he is a genius, he had initiative when looking for different tools and implementing them in the project giving the page a great visual aspect. He is a self-taught person who strives to fulfill his goals. He is also an excellent colleague and human being. It was a pleasure working with him."
    },
    {
      designation: 'Developer',
      name: 'Jhoskar',
      review: "Ezequiel is an excellent programmer, has a great capacity for learning and has great creativity. He can offer the most optimal solution for any problem or task assigned to him and has great potential for the frontend!"
    }
  ]

  return (
    <Section ref={element}>
      <div className="background">
        <img src={testimonial1} alt="background design" className='design1'/>
        <img src={testimonial2} alt="background design" className='design2'/>
      </div>
      <div className="container">
        <div className="testimonials">
          {
            testimonials.map(({designation, name, review}, index) => {
              return (
                <motion.div className={`testimonial ${
                  selected === index ? 'active' 
                  : 'hidden'}
                  `}
                  key={index}
                  variants={testimonialAnimation}
                  animate={controls}
                  transition={{
                    delay: 0.03,
                    type: "tween",
                    duration: 0.8,
                  }}
                  >
                    <div className="image">
                      <div className="circle1"></div>
                      <div className="circle2">
                        <img src={placeholder} alt="placeholder" />
                      </div>
                    </div>
                    <div className="title-container">
                      <span className='designation'>{designation}</span>
                      <h3 className='title'>{name}</h3>
                    </div>
                    <p className="description">{review}</p>
                </motion.div>
              )
            })
          }
        </div>
        <motion.div className="controls"
            variants={testimonialAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
        >
          <button className={selected === 0 ? 'active' : ''} 
          onClick={() => setSelected(0)} 
          /> 
          <button className={selected === 1 ? 'active' : ''} 
          onClick={() => setSelected(1)} 
          /> 
          <button className={selected === 2 ? 'active' : ''} 
          onClick={() => setSelected(2)} 
          /> 
        </motion.div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  overflow: hidden;
  .background {
    position: relative;
    .design1 {
      position: absolute;
      left: 0;
      height: 35rem;
      top: 10rem;
    }
    .design2 {
      position: absolute;
      right: 0;
    } 
  }
  .container {
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 30%;
      .testimonial {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        .image {
          position: relative;
          .circle1 {
            position: absolute;
            left: -0.7rem;
            top: -0.7rem;
            height: 10rem;
            width: 10rem;
            border: 0.2rem solid white;
            border-radius: 10rem;
          }
          .circle2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10rem;
            width: 10rem;
            border-radius: 10rem;
            background-color: #886086b0;
          }
        }
      }
      .hidden {
        display: none;
      }
      color: white;
      .designation {
        color: var(--secondary-color);
      }
      .description {
        height: 8rem;
      }
    }
    .controls {
      display: flex;
      margin-top: 3rem;
      gap: 1rem;

      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background-color: transparent;
        border-color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {

    .background {
      display: none;
    }
    .container {
      padding: 4rem 0;
      .testimonials {
        width: 80%;
        .testimonial {
          .description {
            height: 18rem;
          }
        }
      }
    }
}

`

export default Testimonials