import React from "react";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="main"
      className="custom-container h-screen min-h-[600px] flex items-center gap-6 py-8 flex-col h-[500px] justify-center"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        
        transition={{ stiffness: 200, duration: 0.4 }}
        className="md:text-[60px] text-center sm:text-[34px] text-[26px] md:w-[80%] w-full font-yaBold text-pink"
      >
        Kafolatlangan Natija va Sifat Uyg`unligi
      </motion.h1>
      <motion.p
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ stiffness: 200, duration: 0.4 }}
        className="text-[16px] text-center sm:w-[400px] w-full"
      >
        - Oliy sifatli xizmat, mutaxassislardan eksklyuziv tavsiyalar va
        professional koʻmak.
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ stiffness: 200, delay: 0.6 }}
        className="w-fit bg-linearBluePink hover:scale-110 transition-all duration-200 px-6 py-3 rounded-[10px] z-[102] active:scale-100 md:text-[16px] text-[14px]"
      >
        Xizmatdan Foydalanish
      </motion.button>
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Scroll
          to={"about"}
          spy={true}
          offset={-80}
          smooth={true}
          className="w-[50px] h-[50px] cursor-pointer hover:bg-pink/[0.1] transition relative top-[60px] border-[2px] flex items-center justify-center rounded-full !rotate-90 border-pink"
        >
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 5.99976L1 5.99976"
              stroke="#D946EF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 0.999878L16.2929 5.29277C16.6262 5.6261 16.7929 5.79277 16.7929 5.99988C16.7929 6.20698 16.6262 6.37365 16.2929 6.70698L12 10.9999"
              stroke="#D946EF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Scroll>
      </motion.div>
    </section>
  );
};

export default Hero;
