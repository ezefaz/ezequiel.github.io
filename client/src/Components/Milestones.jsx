import React from 'react'
import milestone1 from '../Assets/milestone1.png'
import milestone2 from '../Assets/milestone2.png'
import milestone3 from '../Assets/milestone3.png'
import milestoneBackground from '../Assets/milestone-background.png'
import styled from 'styled-components'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { useScroll } from '../Components/useScroll'
import { MilestoneAnimation } from '../animations'

function Milestones() {
  
  const milestone = [ 
  {
    image: milestone1,
    data: 'Year Experience',
    amount: '1'    
  },
  {
    image: milestone2,
    data: 'English Level',
    amount: 'B1'    
  },
  {
    image: milestone3,
    data: 'completed proyects',
    amount: '4+'    
  },
];

  const [element, controls] = useScroll();
  
  return (
    <Section ref={element}>
      <div className="background">
        <img src={milestoneBackground} alt="background" />
      </div>
      <div className="milestones">
        {
          milestone.map((ms) => {
            return (
              <motion.div
              className="milestone"
              key={ms.data}
              variants={MilestoneAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
                <p>{ms.amount}</p>
                <span>{ms.data}</span>
                <img src={ms.image} alt="milestone" />
              </motion.div>
            )
          })
        }
      </div>
    </Section>
  )
}


const Section = styled.section`
  height: 100vh;
  background-color: var(--primary-color);
  padding-left: 0 10rem;
  position: relative;
  overflow: hidden;
  .background {
    position: absolute;
    left: 0;
    bottom: -30%;
    img {
      height: 4rem;
      z-index: 2;
    }
  }
  .milestones {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
    align-items: center;
    height: 100%;
    .milestone {
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      color: white;
      p {
        font-size: 5rem;
        font-weight: bolder;
        line-height: 3rem;
        color: white;
      }
      span {
        text-transform: uppercase;
        color: #ffffffc7;
      }
      img {
        height: 6rem;
        color: #fff;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 5rem 2rem;
    min-height: 100vh;
    height: 100%;
    .background {
      display: none;
    }
    .milestones {
      display: grid;
      grid-template-columns: 1fr;
      gap: 5rem;
    }
  }
  
`

export default Milestones