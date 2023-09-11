import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

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

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section id="services" className="custom-container flex flex-col lg:items-center items-start justify-center w-full mt-[20px] gap-4">
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
      <motion.ul
        ref={ref}
        style={{
          transition: "1s",
        }}
        variants={container}
        initial="hidden"
        animate={mainControls}
        className="grid lg:grid-cols-3 items-center place-content-center md:grid-cols-2 grid-cols-1 lg:flex-row flex-col gap-4  lg:w-auto w-full"
      >
        <motion.li
          ref={ref}
          className="flex flex-col gap-[10px] section-item !px-6 items-center"
          variants={item}
        >
          <div className="bg-linearPurple w-[70px] rounded-full p-3">
            <Image
              src={"/images/icons/web.svg"}
              width={100}
              height={100}
              alt="app"
            />
          </div>
          <p className="font-medium text-center font-avertaBold text-[20px]">
            Sayt Yaratish
          </p>
          <p className="w-[100%]">
            Siz xohlagan dizayndagi va darajadagi web saytlarni qisqa muddatda
            tayyorlab beramiz.
          </p>
          <button className="flex gap-[5px] items-center justify-center">
            <p>Ko’proq o’qish</p>
            <Image
              src={"/images/icons/more-arrow.svg"}
              width={12}
              height={20}
              alt="app"
            />
          </button>
        </motion.li>
        <motion.li
          className="flex flex-col gap-[10px] section-item !px-6 items-center"
          variants={item}
        >
          <div className="bg-linearRed w-[70px] rounded-full p-3">
            <Image
              src={"/images/icons/apps.svg"}
              width={100}
              height={100}
              alt="app"
            />
          </div>
          <p className="font-medium text-center font-avertaBold text-[20px]">
            Mobile App yaratish
          </p>
          <p className="w-[100%]">
            Siz xohlagan dizayndagi va darajadagi mobile dasturlarni qisqa
            muddatda tayyorlab beramiz.
          </p>
          <button className="flex gap-[5px] items-center justify-center">
            <p>Ko’proq o’qish</p>
            <Image
              src={"/images/icons/more-arrow.svg"}
              width={12}
              height={20}
              alt="app"
            />
          </button>
        </motion.li>
        <motion.li
          className="flex flex-col gap-[10px] section-item !px-6 items-center"
          variants={item}
        >
          <div className="bg-linearBlue w-[70px] rounded-full p-3">
            <Image
              src={"/images/icons/crm.svg"}
              width={100}
              height={100}
              alt="app"
            />
          </div>
          <p className="font-medium text-center font-avertaBold text-[20px]">
            CRM Dastur
          </p>
          <p className="w-[100%]">
            Siz xohlagan dizayndagi va darajadagi CRM Dasturlarni tyyorlab
            beramiz.
          </p>
          <button className="flex gap-[5px] items-center justify-center">
            <p>Ko’proq o’qish</p>
            <Image
              src={"/images/icons/more-arrow.svg"}
              width={12}
              height={20}
              alt="app"
            />
          </button>
        </motion.li>
        <motion.li
          className="flex flex-col gap-[10px] section-item !px-6 items-center"
          variants={item}
        >
          <div className="bg-linearGreen w-[70px] rounded-full p-3">
            <Image
              src={"/images/icons/design.svg"}
              width={100}
              height={100}
              alt="app"
            />
          </div>
          <p className="font-medium text-center font-avertaBold text-[20px]">
            Dizayn tayyorlash
          </p>
          <p className="w-[100%]">
            Siz xohlagan turdagi dizaynlarni qisqa muddatda tayyorlab beramiz.
          </p>
          <button className="flex gap-[5px] items-center justify-center">
            <p>Ko’proq o’qish</p>
            <Image
              src={"/images/icons/more-arrow.svg"}
              width={12}
              height={20}
              alt="app"
            />
          </button>
        </motion.li>
        <motion.li
          className="flex flex-col gap-[10px] section-item !px-6 items-center"
          variants={item}
        >
          <div className="bg-linearAqua w-[70px] rounded-full p-3">
            <Image
              src={"/images/icons/smm.svg"}
              width={100}
              height={100}
              alt="app"
            />
          </div>
          <p className="font-medium text-center font-avertaBold text-[20px]">
            SMM Xizmati
          </p>
          <p className="w-[100%]">
            Biz sizning ijtimoiy tarmoqlardagi saxifalaringizni siz xohlagan
            darajaga olib chiqib beramiz.
          </p>
          <button className="flex gap-[5px] items-center justify-center">
            <p>Ko’proq o’qish</p>
            <Image
              src={"/images/icons/more-arrow.svg"}
              width={12}
              height={20}
              alt="app"
            />
          </button>
        </motion.li>
      </motion.ul>
    </section>
  );
};

export default Services;
