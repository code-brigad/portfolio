import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef();

  console.log(mousePosition);

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
      transition={{ duration: 0 }}
      animate="default"
      className="lg:block hidden w-[100px] h-[100px] pointer-events-none rounded-full blur-[90px] bg-pink fixed top-0 left-0"
    />
  );
};

export default Cursor;
