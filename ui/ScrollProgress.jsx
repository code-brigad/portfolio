import React, { useEffect, useState } from "react";
import { scroll } from "framer-motion";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";

const variants = {
  open: { scale: 1 },
  closed: { scale: 0.2 },
};

const ScrollProgress = () => {
  useEffect(() => {
    const progressWheel = document.querySelector(".progress-wheel");
    scroll((progress) => {
      progressWheel.style.strokeDasharray = `${progress}, 1`;
    });
  }, []);

  const [isScroll, setIsScroll] = useState(false);
  const listenScroll = () => {
    window.scrollY > 100 ? setIsScroll(true) : setIsScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, [isScroll]);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      animate={isScroll ? "open" : "closed"}
      variants={variants}
      className={`${
        isScroll ? "fixed" : "hidden"
      } cursor-pointer lg:bottom-[60px] bottom-[30px] lg:right-[100px] right-[30px] flex items-center justiy-center z-[200] custom-shadow`}
    >
      <Scroll
        to={"main"}
        spy={true}
        offset={-170}
        smooth={true}
        className="w-[50px] block h-[50px] bg-pink/[0.1] backdrop-blur rounded-full relative"
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 100 100"
          className="progress-wheel"
        >
          <circle cx="35" cy="35" r="34" pathLength="1" className="bg" />
        </svg>
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] -rotate-90"
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
  );
};

export default ScrollProgress;
