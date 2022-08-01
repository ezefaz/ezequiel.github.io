import React from 'react'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Milestones from './Components/Milestones';
import Portfolio from './Components/Portfolio';
import Pricing from './Components/Pricing';
import ScrollToTop from './Components/ScrollToTop';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Video from './Components/Video'
import Content from './Components/Content';
import Testimonials from './Components/Testimonials';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { heroOne, heroTwo, heroThree } from './Data/HeroData';
import Title from './Components/Title';


function App() {

  return (
    <motion.div initial='hidden' animate='show'>
      <ScrollToTop />
      <Home />
      <Services />
      {/* <Portfolio /> */}
      <Milestones />
      <Content {...heroOne} />
      <Title value='Portfolio'/>
			<Content {...heroTwo} />
			<Content {...heroThree} />
      <Skills />
      <Video />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default App;