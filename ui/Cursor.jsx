import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - "50",
      y: mousePosition.y - "50",
    },
  };

  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.1 }}
      animate="default"
      className="md:block hidden w-[100px] h-[100px] pointer-events-none rounded-full blur-[130px] bg-pink fixed top-0 left-0"
    />
  );
};

export default Cursor;
