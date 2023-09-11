import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section id="about" className="custom-container flex flex-col lg:items-center items-start justify-center w-full mt-[20px] gap-4">
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
        <h1 className="font-bold text-[42px]">Biz Haqimizda</h1>
        <div className="lg:w-[300px] w-full">
          <p className="font-normal text-center">
            “Dasturchilar brigadasi” uchun sifat va son birday muhim!
          </p>
        </div>
      </motion.div>
      <motion.ul
        ref={ref}
        variants={container}
        initial="hidden"
        animate={mainControls}
        className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:w-auto w-full"
      >
        <motion.li
          ref={ref}
          className="flex custom-shadow flex-col gap-[10px] section-item md:!px-6 px-3"
          variants={item}
        >
          <h1 className="font-bold text-[42px] font-yaBold">1 +</h1>
          <p className="font-normal">Yillik tajriba</p>
          <p className="w-full">
            Biz ozroq bo’lsaham bir necha yillik tajribaga egamiz
          </p>
        </motion.li>
        <motion.li
          className="flex custom-shadow flex-col gap-[10px] section-item md:!px-6 px-3 item"
          variants={item}
        >
          <h1 className="font-bold text-[42px] font-yaBold">10 +</h1>
          <p className="font-normal">Muvaffaqiyatli loyihalar</p>
          <p className="w-full">
            Biz 10’dan ko’p loyihalarni muvaffaqiyatli bajarganmiz
          </p>
        </motion.li>
        <motion.li
          className="flex custom-shadow flex-col gap-[10px] section-item md:!px-6 px-3 item"
          variants={item}
        >
          <h1 className="font-bold text-[42px] font-yaBold">25 +</h1>
          <p className="font-normal">Mijozlar</p>
          <p className="w-full">
            Biz 25’dan ko’p mijozlar bilan faoliyat olib bormoqdamiz
          </p>
        </motion.li>
      </motion.ul>
    </section>
  );
};

export default AboutUs;