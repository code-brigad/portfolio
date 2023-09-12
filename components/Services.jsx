import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { servicesData } from "@/data/services";
import { ServicesInfo } from "@/ui";

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

const Services = () => {
  const [open, setOpen] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section
      id="services"
      className="custom-container flex flex-col lg:items-center items-start justify-center w-full mt-[20px] gap-4"
    >
      <motion.div
        ref={ref}
        variants={container}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          transition: "1s",
        }}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center gap-2 justify-center text-center"
      >
        <h1 className="font-bold text-[42px]">Bizning Xizmatlar</h1>
        <div className="lg:w-[300px] w-full">
          <p className="font-normal text-center">
            Professionallar jamoasi sizga quyidagi xizmat turlarini taklif
            etadi:
          </p>
        </div>
      </motion.div>
      <div className="w-full gap-6 grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-6">
          {servicesData.map((data) => {
            return <ServicesInfo open={open} setOpen={setOpen} data={data} />;
          })}
        </div>
        <div className="md:block hidden h-fit sticky top-[25%] translate-[-50%]">
          {servicesData.map((data) => {
            return (
              <>
                {open == data.id ? (
                  <motion.div
                    initial={{ scale: 0.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    key={data.id}
                    className="flex items-center justify-center"
                  >
                    <div className="lg:w-[60%] w-full h-fit p-8 flex items-center justify-center section-item custom-shadow">
                      <Image
                        src={data.photo}
                        alt={data.title}
                        width={500}
                        height={500}
                        className="md:w-full w-[60%] pointer-events-none"
                      />
                    </div>
                  </motion.div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
