import React, { useEffect, useState } from 'react'
import selected from '../public/images/icons/dropdown.svg'
import { selectData } from '@/data/select';
import Image from 'next/image';
import { motion, stagger, useAnimate } from 'framer-motion';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

        animate(
            "ul",
            {
                clipPath: isOpen
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)"
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5
            }

        );

        animate(
            "li",
            isOpen
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.2,
                delay: isOpen ? staggerMenuItems : 0
            }
        );
    }, [isOpen]);

    return scope;
}

const Selected = () => {
    const [hidden, setHidden] = useState(true)
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    const [select, setSelect] = useState({
        id: 0,
        title: "Xizmat turi"
    })
    return (
        <nav className="section-item menu md:w-[80%] w-full h-[50px] relative" ref={scope}>
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className='flex justify-between w-[100%] items-center'
            >
                <h1>{select?.title}</h1>
                <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                    <Image src={selected} className='rotate-180 z-1' width={15} />
                </div>
            </motion.button>
            <ul
                style={{
                    pointerEvents: isOpen ? "auto" : "none",
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    style: "bg-black section-item gap-[10px] flex-col !p-0 absolute top-[50px] left-0 w-full"
                }}
                className="flex mt-[10px] z-[2] bg-black overflow-hidden section-item flex-col !p-0 absolute top-[50px] left-0 w-full">
                {selectData.map((e) => {
                    return (
                        <li className={`w-full p-4 rounded-[0px] hover:bg-[#FFF]/[0.05] ${e.id == select?.id ? "bg-pink hover:bg-pink" : ""}`}
                            onClick={() => {
                                setSelect(e)
                                setIsOpen(false)
                            }}
                        >
                            {e.title}
                        </li>
                    )
                })}
            </ul>{" "}
        </nav>
    )
}

export default Selected