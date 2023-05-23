import React from 'react'
import styled from 'styled-components'
import Title from "./Title";
import placeholder from '../Assets/placeholder.png'
import play from '../Assets/play.png'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { useScroll } from '../Components/useScroll'
import { blogsAnimation } from '../animations'


function Blog() {

  const [element, controls] = useScroll();

  const blogData = [
    {
      title: "Summer trip to the mountains",
      type: "Adventure",
      description: "lorem ipsum es un hobbit grande"
    },
    {
      title: "Summer trip to the mountains",
      type: "Personal",
      description: "lorem ipsum es un hobbit grande"
    },
    {
      title: "Summer trip to the mountains",
      type: "Music",
      description: "lorem ipsum es un hobbit grande"
    },
  ]
  
  return (
    <Section id='blog' ref={element}>
      <Title value='blog' />
      <div className="decoration"></div>
        <div className="blogs">
          {
            blogData.map(({ title, type, description }) => {
              return (
                <motion.div className="blog"
                variants={blogsAnimation}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: "tween",
                  duration: 0.8,
                }}
                >
                  <div className="image">
                    <img src={placeholder} alt="placeholder" />
                  </div>
                  <div className="title">
                    <h3>{title}</h3>
                  </div>
                  <span className="type">{type}</span>
                  <div className="description">
                    <p>{description}</p>
                  </div>
                  <div className="more">
                    <img src={play} alt="play" />
                    <span>Read More</span>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  .decoration {
    position: absolute;
    height: 20rem;
    width: 70vw;
    border: 0.5rem solid var(--secondary-color);
    left: 15%;
    top: -2rem;
}
.blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 5rem 20rem;
  .blog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .image {
      height: 22rem;
      background-color: #a686f0af;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      h3 {
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    .type {
      color: var(--primary-color);
      font-weight: bolder;
      text-transform: uppercase;
    }
    .description {
      height: 10rem;
      color: var(--primary-color);
    }
    .more {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      span {
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: var(--primary-color);
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  margin: 2rem 0;
  .decoration {
    display: none;
  }
  .blogs {
    grid-template-columns: 1fr;
    margin: 0 1rem;
    padding: 0 2rem;
  }
}
`

export default Blog