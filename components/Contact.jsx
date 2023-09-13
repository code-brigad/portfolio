import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import submit from '../public/images/icons/submit.svg'
import { motion, useAnimation, useInView } from 'framer-motion';
import Selected from './Selected';

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

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    return (
        <motion.section
            ref={ref}
            variants={container}
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                transition: "1s",
            }}
            initial="hidden"
            animate="visible"
            id="team"
            className="custom-container flex flex-col w-full mt-[20px] gap-4"
        >
            <div className='custom-container w-full'>
                <div className='section-item flex justify-center flex-col items-center gap-[20px]'>
                    <h1 className='font-bold text-[42px]'>Bog’lanish</h1>
                    <p className='font-normal md:w-[50%] w-full text-center'>Biz bilan bog’lanish va xizmatlarimizdan foydalanish uchun quyidagi ma’lumotlarni
                        to’ldiring va “yuborish” tugmasini bosing.
                    </p>
                    <input type="text" className='outline-none section-item md:w-[80%] w-full' placeholder='Ismingiz' />
                    <Selected />
                    <input type="text" className='outline-none section-item md:w-[80%] w-full' placeholder='Telefon raqam' />
                    <button className='flex px-6 py-3 rounded-[10px] bg-linearBluePink justify-center items-center gap-[10px]'>
                        <Image src={submit} width={15} />
                        <p>Yuborish</p>
                    </button>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact