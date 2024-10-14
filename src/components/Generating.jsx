import React from 'react'
import { loading } from '../assets'
import {motion} from 'framer-motion'

const Generating = ({className}) => {
  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(0, 0, 255, 1)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(0, 0, 255, 1)",
    },
  };
  return (
    <div
      className={`flex items-center h-[3.5rem]
    bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}
    >
      
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[20px] stroke-red-400 stroke-[0.5] mx-4"
        >
          <motion.path
            d="M8.006 2.802l.036.024 10.549 7.032.805.567c.227.183.494.437.648.808a2 2 0 0 1 0 1.532c-.154.371-.421.625-.648.808-.217.175-.5.364-.805.567L8.006 21.198l-.993.627c-.285.154-.676.331-1.132.303a2 2 0 0 1-1.476-.79c-.276-.365-.346-.788-.375-1.111S4 19.502 4 19.054V4.99v-.043l.029-1.174c.03-.323.1-.746.375-1.11a2 2 0 0 1 1.476-.79c.456-.027.847.149 1.132.304s.62.378.993.627z"            variants={svgIconVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: {
                duration: 2,
                ease: "easeInOut",
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
              fill: {
                duration: 2,
                ease: "easeIn",
                delay: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
            }}
          />
        </motion.svg>
      
      Skills are generating
    </div>
  );
}

export default Generating
