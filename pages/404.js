import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'

const Custom404 = () => {

    const handleBack = () => {
        window.history.back()
    }

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
                <div className='flex sm:flex-row flex-col gap-3'>
                    <button onClick={handleBack} className='sm:w-fit w-full sm:hover:scale-110 hover:scale-100 transition-all duration-200 px-6 py-3 rounded-[10px] z-[102] active:scale-100 md:text-[16px] text-[14px] flex flex-row items-center justify-center gap-3 border border-pink'>
                        <svg className='rotate-180' width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.121 0.293C7.93353 0.480528 7.82821 0.734836 7.82821 1C7.82821 1.26516 7.93353 1.51947 8.121 1.707L11.413 5L1 5.007C0.734784 5.007 0.48043 5.11236 0.292893 5.29989C0.105357 5.48743 0 5.74178 0 6.007C0 6.27222 0.105357 6.52657 0.292893 6.71411C0.48043 6.90164 0.734784 7.007 1 7.007L11.414 7L8.121 10.293C8.02549 10.3852 7.94931 10.4956 7.8969 10.6176C7.84449 10.7396 7.8169 10.8708 7.81575 11.0036C7.8146 11.1364 7.8399 11.2681 7.89018 11.391C7.94046 11.5138 8.01471 11.6255 8.10861 11.7194C8.2025 11.8133 8.31415 11.8875 8.43705 11.9378C8.55994 11.9881 8.69162 12.0134 8.8244 12.0123C8.95718 12.0111 9.0884 11.9835 9.2104 11.9311C9.33241 11.8787 9.44275 11.8025 9.535 11.707L13.121 8.122C13.3996 7.84342 13.6207 7.51268 13.7715 7.14867C13.9222 6.78466 13.9999 6.39451 13.9999 6.0005C13.9999 5.60649 13.9222 5.21634 13.7715 4.85233C13.6207 4.48832 13.3996 4.15758 13.121 3.879L9.535 0.293C9.34747 0.105529 9.09316 0.000213623 8.828 0.000213623C8.56284 0.000213623 8.30853 0.105529 8.121 0.293Z" fill="white" />
                        </svg>
                        Ortga
                    </button>
                    <Link href={"/"}>
                        <button
                            className="sm:w-fit w-full bg-linearBluePink sm:hover:scale-110 hover:scale-100 transition-all duration-200 px-6 py-3 rounded-[10px] z-[102] active:scale-100 md:text-[16px] text-[14px]"
                        >
                            Asosiy sahifaga qaytish
                        </button>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

export default Custom404