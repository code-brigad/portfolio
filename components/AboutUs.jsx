import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
        }
    }
};

const item = {
    hidden: { y: 10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    }
};

const AboutUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    return (
        <div
            className='flex flex-col lg:items-center items-start justify-center w-full mt-[20px] p-6'
        >
            <motion.ul
                ref={ref}
                variants={container}
                style={{
                    transform: isInView ? "none" : "translateY(100px)",
                    transition: "1s"
                }}
                initial="hidden"
                animate="visible"
                className='flex flex-col items-center justify-center text-center'
            >
                <motion.li
                    ref={ref}
                    variants={item}
                    className='flex flex-col items-center'
                >
                    <h1 className='font-bold text-[42px]'>Biz Haqimizda</h1>
                    <p className='font-normal lg:w-[70%] w-full text-center'>“Dasturchilar brigadasi” uchun sifat va son birday muhim!</p>
                </motion.li>
            </motion.ul>
            <motion.ul
                ref={ref}
                style={{
                    transition: "1s"
                }}
                variants={container}
                initial="hidden"
                animate={mainControls}
                className='flex lg:flex-row flex-col gap-[40px] p-6 lg:w-auto w-full'
            >
                <motion.li
                    ref={ref}
                    className='flex flex-col gap-[10px] section-item !px-6'
                    variants={item}
                >
                    <h1 className='font-bold text-[42px]'>1 +</h1>
                    <p className='font-normal'>Yillik tajriba</p>
                    <p className='w-[80%]'>Biz ozroq bo’lsaham bir necha yillik tajribaga egamiz</p>
                </motion.li>
                <motion.li className='flex flex-col gap-[10px] section-item !px-6 item' variants={item}>
                    <h1 className='font-bold text-[42px]'>10 +</h1>
                    <p className='font-normal'>Muvaffaqiyatli loyihalar</p>
                    <p className='w-[70%]'>Biz 10’dan ko’p loyihalarni muvaffaqiyatli bajarganmiz</p>
                </motion.li>
                <motion.li className='flex flex-col gap-[10px] section-item !px-6 item' variants={item}>
                    <h1 className='font-bold text-[42px]'>25 +</h1>
                    <p className='font-normal'>Mijozlar</p>
                    <p className='w-[70%]'>Biz 25’dan ko’p mijozlar bilan faoliyat olib bormoqdamiz</p>
                </motion.li>
            </motion.ul>
        </div >
    )
}

export default AboutUs