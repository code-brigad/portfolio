import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutData } from "@/data/about";

const AboutUs = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["0.2", "1"]);
  return (
    <motion.section
      style={{ scale }}
      ref={containerRef}
      id="about"
      className="custom-container flex flex-col lg:items-center items-start justify-center w-full mt-[20px] gap-4"
    >
      <div className="w-full flex flex-col items-center gap-2 justify-center text-center">
        <h1 className="font-bold text-[42px]">Biz Haqimizda</h1>
        <div className="lg:w-[300px] w-full">
          <p className="font-normal text-center">
            “Dasturchilar brigadasi” uchun sifat va son birday muhim!
          </p>
        </div>
      </div>
      <ul className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:w-auto w-full">
        {aboutData.map((data) => {
          return (
            <li
              key={data.id}
              className="flex custom-shadow flex-col gap-[10px] section-item md:!px-6 px-3"
            >
              <h1 className="font-bold text-[42px] font-yaBold">
                {data.value}
              </h1>
              <p className="font-normal">{data.title}</p>
              <p className="w-full">{data.desc}</p>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
};

export default AboutUs;
