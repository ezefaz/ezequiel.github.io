import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { useScroll } from '../Components/useScroll'
import { contactAnimation } from '../animations'

function Contact() {

  const [element, controls] = useScroll();
  return (
    <Section id='contact' ref={element}>
      <Title value='contact'/>
      <motion.div className="contact"
        variants={contactAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="contact__title">
          <p>Stay in touch with me</p>
          <h2>Send me a message.</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Please, use the form on the right to get in touch!</h4>
            <p>
              Try to be specific about the reason of the message.
            </p>
            <p>Also, don't forget to put your name or the company name. I'll be responding as soon as I see the message.</p>
            <div>
              <p><strong>Address: Buenos Aires, Argentina</strong></p>
            </div>
            <div>
              <p>
                <strong>Email: ezefaz@gmail.com</strong>
              </p>
            </div>
            <div>
              <p>
                <strong>Linkedin: linkedin.com</strong>
              </p>
            </div>
          </div>
          <div className="contact__data__form">
            <input type="text" placeholder='name' />
            <input type="email" placeholder='email' />
            <textarea placeholder="message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 23rem;
    &__title {
      margin: 6rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
      }
      h2 {
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
    &__description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h4 {
        font-size: 1.5rem;
      }
      p {
        letter-spacing: 0.1rem;
        text-align: justify;
      }
      div {
        p {
          strong {
            text-transform: uppercase;
          }
        }
      } 
    }
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      input, 
      textarea {
        text-transform: uppercase;
        border: none;
        border-bottom: 0.1rem solid var(--secondary-color);
        letter-spacing: 0.2rem;
        width: 100%;
        padding-bottom: 0.7rem;
        color: var(--secondary-color);
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: var(--secondary-color);
          letter-spacing: 0.4rem;
        }
      }
      textarea {
        width: 100% !important;
        height: 50%;
        resize: none;
      }
      button {
        width: 100%;
        background-color: transparent;
        border: 0.1rem solid var(--secondary-color);
        height: 3rem;
        color: var(--secondary-color);
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          background-color: var(--secondary-color);
          color: var(--primary-color);
        }
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  .contact {
    margin: 1rem;
    padding: 0 1rem;
    &__title {
      margin: 0;
      text-align: center;
      p {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
    &__data {
      grid-template-columns: 1fr;
      padding: 1rem;
      margin: 0;
      p {
        text-align: left;
      }
      &__form {
        button {
          height: 6rem;
        }
      }
    }
  }
}

`

export default Contact