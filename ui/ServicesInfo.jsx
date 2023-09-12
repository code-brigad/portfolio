import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

const ServicesInfo = ({ setOpen, data }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    setOpen(data.id)
  }, [isInView, data.id])

  return (
    <motion.div
      ref={ref}
      key={data.id}
      className={`h-fit section-item custom-shadow flex flex-col gap-2 ${
        isInView ? "!scale-[1.05] border !border-pink opacity-100 active:!scale-100 cursor-pointer" : "cursor-default opacity-40 hover:!border-whiteBorder"
      }`}
    >
      <div className="flex flex-col items-start gap-3">
        <div className="p-2 bg-pink rounded-[8px]">
          <Image
            src={data.icon}
            alt={data.title}
            width={500}
            height={500}
            className="w-[40px] h-[40px] pointer-events-none"
          />
        </div>
        <h3 className="font-medium font-avertaBold text-[20px]">
          {data.title}
        </h3>
      </div>
      <p>{data.desc}</p>
    </motion.div>
  );
};

export default ServicesInfo;
