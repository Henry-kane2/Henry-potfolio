import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { staggerContainer } from "../utils/motion";
import {  service1 } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-[250px] ">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
           className="w-[250px]   relative  p-[1px] 
                     rounded-[20px] shadow-card border border-neutral-600 "
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className=" rounded-[20px] py-5 p-x12 min-h-[200px] flex justify-evenly
              items-center flex-col border border-neutral-700 gap-4 w-full"
          >
            <img src={icon} alt="title" className="w-16 h-16 object-contain" />
            <h3 className="text-white font-bold text-[20px] text-center">
              {title}
            </h3>
            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
              
                <img
                  src={service1}
                  width={380}
                  height={362}
                  alt='image'
                  className="w-full h-full object-cover"
                />
              
            </div>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        id="about"
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" >
          &nbsp;
        </span>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px]
                 max-w-3xl leading-[30px]"
        >
          I'm a skilled software developer with experience in Javascript and
          expertise in frameworks like React, redux and Three.js I'm a quick
          learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solution that solve real-world problems.
          let's work together to bring your idea to life !
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default About
