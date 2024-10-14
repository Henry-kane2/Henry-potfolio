import React from "react";
import { motion } from "framer-motion";

const Stagger = () => {
  return (
    < >
      <motion.span
        initial={{
          opacity: 0,
          y: -70,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        Henry
      </motion.span>
      
    </>
  );
};

export default Stagger;
