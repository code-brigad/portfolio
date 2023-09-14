import React, { useRef } from "react";
import Slider from "react-slick";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["0.2", "1"]);

  const settings = {
    arrows: false,
    dots: false,
    speed: 500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
  };

  return (
    <motion.section
      ref={containerRef}
      variants={container}
      style={{
        scale,
      }}
      initial="hidden"
      animate="visible"
      id="projects"
      className="custom-container flex flex-col w-full mt-[20px] gap-4"
    >
      <div className="w-full flex flex-col items-center gap-2 justify-center text-center">
        <h1 className="font-bold text-[42px]">Loyihalar</h1>
        <div className="lg:w-[300px] w-full">
          <p className="font-normal text-center">
            Jamoamiz bilan birga muvaffaqiyatli bajargan loyihalarimiz:
          </p>
        </div>
      </div>
      <Slider {...settings}>
        {projectsData.map((data) => {
          return (
            <div key={data.id} className="section-item h-fit !flex lg:flex-row flex-col-reverse items-center gap-2">
              <div className="flex flex-col gap-3 lg:w-[30%] w-full">
                <h1 className="font-yaBold text-pink md:text-[42px] text-[26px]">{data.name}</h1>
                <p>{data.desc}</p>
                <Link href={data.link} target="_blank" className="h-fit">
                  <button className="bg-linearBluePink sm:hover:scale-110 hover:scale-100 transition-all duration-200 px-6 py-3 rounded-[10px] z-[102] sm:active:scale-100 active:scale-90 sm:w-fit w-full">
                    Ko'rish
                  </button>
                </Link>
              </div>
              <Image
                src={data.photo}
                alt={data.name}
                width={1000}
                height={500}
                className="lg:w-[70%] w-full hover:scale-[1.02] transition-all duration-200"
              />
            </div>
          );
        })}
      </Slider>
    </motion.section>
  );
};

export default Projects;
