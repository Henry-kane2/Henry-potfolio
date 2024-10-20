import React, { useRef } from 'react'
import { styles } from '../../styles'
import Stagger from './Stagger'
import { motion } from 'framer-motion'
import { ScrollParallax } from 'react-just-parallax'
import { IMAGES } from '../../constants'
const Hero = () => {
const parallaxRef= useRef(null)

  return (
    <section id="hero" 
    ref={parallaxRef}
    className="top-12 mt-[90px] md:flex ">
      
        <div
          className={`${styles.paddingX} 
                  inset-0 
                 max-w-7xl mx-auto flex flex-row 
                 items-start gap-5 mt-9`}
        >
          <div className=" flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-red-500" />
            <div className="w-1 h-80  bg-gradient-to-b  from-red-500 " />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              <motion.span
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                HI
              </motion.span>
              ,I'm
              <span className="text-blue-500">
                &nbsp;
                <Stagger />
              </span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 md:w-[500px] md:text-[15px] sm:text-[15px] sm:w-[400px] lg:w-[500px] `}
            >
              <p className="text-2xl font-bold text-blue-600 m-2">
                Frontend Developer
              </p>
              "Detail-oriented front End Developer with more than 2 years
              experience working with HTML,CSS,javascript,React js and
              TypeScript... Highly adept at both independent and collaborative
              projects,with an emphasis on landing page and website
              development."
              <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
        </div>
        <div className="hidden lg:flex absolute lg:right-[600px] right-[350px] top-[400px]  w-[200px]">
          <img src="src/assets/collaboration/curve-1.svg" alt="curve" />
        </div>

        <ScrollParallax>
          <img
            src={IMAGES.roadmap2}
            alt="heroimage"
            className="relative  lg:w-[700px] lg:h-[400px]
        lg:top-[17px] -top-[10px]  md:w-[400px] md:-left-[70px]
        md:top-11 lg:-left-[100px] sm:top-9 "
          />
        </ScrollParallax>
      
    </section>
  );
}

export default Hero
