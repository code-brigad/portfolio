import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'

const Custom404 = () => {
    return (
        <>
        <Head>
            <title>Code Brigade - Sahifa Topilmadi</title>
        </Head>
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ stiffness: 200, delay: 0.6 }}
            className='custom-container h-screen min-h-[600px] py-[100px] flex flex-col gap-6 justify-center'
        >
            <div className='section-item w-fit !p-2 !rounded-lg flex flex-row items-center gap-2'>
                <div className='bg-pink w-[10px] h-[10px] rounded-full'></div>
                <p>404 error</p>
            </div>
            <h1 className='md:text-[60px] sm:text-[34px] text-[26px] font-yaBold text-pink leading-none'>Sahifa topilmadi</h1>
            <p>Kechirasiz, siz izlayotgan sahifa mavjud emas.</p>
            <Link href={"/"}>
                <button
                    className="w-fit bg-linearBluePink hover:scale-110 transition-all duration-200 px-6 py-3 rounded-[10px] z-[102] active:scale-100 md:text-[16px] text-[14px]"
                >
                    Asosiy sahifaga qaytish
                </button>
            </Link>
        </motion.div>
        </>
    )
}

export default Custom404