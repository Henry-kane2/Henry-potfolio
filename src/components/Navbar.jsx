import { motion } from 'framer-motion'
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri';
import { useState } from 'react';
import { FcAbout, FcContacts } from 'react-icons/fc';
import { BiHome } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';


const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
      }

const gridContainerVariants = {
        hidden:{opacity:0},
        show:{
        opacity:1,
        transition:{
        staggerChildren:0.25,
      },
    },
  }
    const gridSqaurevariants= {hidden:{opacity: 0},show:{opacity:1}}


  return (
    <div
      className="flex w-full h-[60px] border-y border-neutral-500
    rounded-lg justify-between z-10  fixed backdrop-blur-sm top-4"
    >
      <motion.h1
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="py-3 px-3 ml-4 cursor-auto flex gap-1"
      >
        <span>
          <img
            src="logo.svg"
            alt="logo"
            className="scale-140 mr-1"
          />
        </span>
        {/*   motion for alphabets fading after one another        */}
        <motion.span
          variants={gridSqaurevariants}
          className="text-xl font-bold"
        >
          H
        </motion.span>

        <motion.span variants={gridSqaurevariants}>E</motion.span>

        <motion.span variants={gridSqaurevariants}>N</motion.span>

        <motion.span variants={gridSqaurevariants}>R</motion.span>

        <motion.span variants={gridSqaurevariants}>Y</motion.span>

        <motion.span variants={gridSqaurevariants}>&nbsp;</motion.span>

        <motion.span className="pt-2 " variants={gridSqaurevariants}>
          |
        </motion.span>

        <motion.span variants={gridSqaurevariants}>&nbsp;</motion.span>

        <motion.span className="pt-2 mt-2" variants={gridSqaurevariants}>
          P
        </motion.span>

        <motion.span className="pt-2 mt-2" variants={gridSqaurevariants}>
          O
        </motion.span>

        <motion.span className="pt-2 mt-2" variants={gridSqaurevariants}>
          F
        </motion.span>

        <motion.span className="pt-2 mt-2" variants={gridSqaurevariants}>
          O
        </motion.span>

        <motion.span className="pt-2 mt-2" variants={gridSqaurevariants}>
          L
        </motion.span>

        <motion.span className="pt-2 mt-2" variants={gridSqaurevariants}>
          I
        </motion.span>

        <motion.span className="pt-2 mt-2" variants={gridSqaurevariants}>
          O
        </motion.span>
      </motion.h1>

      <ul className=" hidden md:flex gap-2 py-3 px-8 ml-5  ">
        <li className="px-5 ml-9">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "transparent",
                color: "white",
              }}
              transition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className=" w-2/2 h-[40px] hover:border border-neutral-500 py-0 rounded-lg 
            text-gray-100 font-light tracking-wide p-3 md:w-[100px]"
            >
              <a href="#hero">Home</a>
            </motion.button>
          </motion.div>
        </li>

        <li className=" px-5 ml-9">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "transparent",
                color: "white",
              }}
              transition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className=" w-2/2 h-[40px] hover:border border-neutral-500 py-0 rounded-lg 
            text-gray-100 font-light tracking-wide p-3 md:w-[100px]"
            >
              <a href="#about">About</a>
            </motion.button>
          </motion.div>
        </li>

        <li className=" px-5 ml-9 p-0">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "transparent",
                color: "white",
              }}
              transition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className=" w-2/2 h-[40px] hover:border border-neutral-500 py-0 rounded-lg 
            text-gray-100 font-light tracking-wide p-3 md:w-[100px]"
            >
              <a href="#contact">Contact</a>
            </motion.button>
          </motion.div>
        </li>
      </ul>

      <div>
        {/* Hamburger Icon for mobile  */}
        <div className="md:hidden w-1/2 h-1/2 right-0">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none w-1/2 
                         h-1/2 p-4 hover:scale-150 left-0"
            aria-label={isOpen ? "Close Menu" : " Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden bg-neutral-900/60 backdrop-blur-md border
            border-neutral-800 p-4 rounded-xl mt-4 z-11 w-[200px] h-[250px]"
          >
            <div className="flex flex-col space-y-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "transparent",
                  color: "white",
                }}
                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                className="bg-blue-600 w-2/2 h-[40px] hover:border border-neutral-500 py-0 rounded-lg 
            text-gray-100 font-light tracking-wide p-3 md:w-[100px] flex items-center px-5 gap-2"
              >
                <BiHome className="scale-150" />
                <a href="hero">Home</a>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "transparent",
                  color: "white",
                }}
                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                className="bg-blue-600 w-2/2 h-[40px] hover:border border-neutral-500 py-0 rounded-lg 
            text-gray-100 font-light tracking-wide p-3 md:w-[100px] flex items-center px-5 gap-2 "
              >
                <FcAbout className="scale-150" /> <a href="#about">About</a>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "transparent",
                  color: "white",
                }}
                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                className="bg-blue-600 w-2/2 h-[40px] hover:border border-neutral-500 py-0 rounded-lg 
            text-gray-100 font-light tracking-wide p-3 md:w-[100px] flex items-center px-5 gap-2"
              >
                <FcContacts className="scale-150" />
                <a href="#contact">Contact</a>
              </motion.button>

              <a
                href="#"
                className="border border-neutral-700 text-white
                     py-2 px-4 rounded-lg hover:bg-neutral-700 transition flex items-center  gap-2"
              >
                <MdEmail />
                Email
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
