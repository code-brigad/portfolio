import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="main" className="custom-container h-screen min-h-[600px] flex items-center gap-6 py-8 flex-col h-[500px] justify-center">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ stiffness: 200 }}
        className="md:text-[60px] text-center sm:text-[34px] text-[26px] md:w-[80%] w-full font-yaBold text-pink"
      >
        Kafolatlangan Natija va Sifat Uyg`unligi
      </motion.h1>
      <motion.p
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ stiffness: 200 }}
        className="text-[16px] text-center sm:w-[400px] w-full"
      >
        - Oliy sifatli xizmat, mutaxassislardan eksklyuziv tavsiyalar va
        professional koʻmak.
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ stiffness: 200 }}
        className="w-fit bg-linearBluePink hover:scale-110 transition-all duration-200 px-6 py-3 rounded-[10px] z-[102] active:scale-100 md:text-[16px] text-[14px]"
      >
        Xizmatdan Foydalanish
      </motion.button>
    </section>
  );
};

export default Hero;
