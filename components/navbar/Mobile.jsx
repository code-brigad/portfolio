import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navbarData } from "@/data/navbar";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const Mobile = ({ open, setOpen }) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <div
              className="w-full h-screen bg-[#FFF]/[0.05] md:hidden block backdrop-blur absolute top-0 left-0"
              onClick={() => setOpen(!open)}
            ></div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                stiffness: 500,
                duration: 0.2,
              }}
              className={`absolute overflow-x-hidden md:hidden block top-0 left-0 min-w-[250px] w-[80%] h-screen bg-black flex flex-col justify-between`}
            >
              <div>
                <div className="my-2 py-2 px-6 flex flex-row justify-between items-center">
                  <Link href={"/"} className="mr-8 font-yaBold text-[24px]">
                    Brigade
                  </Link>
                  <div
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 0.999939L1 14.9999"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 0.999939L15 14.9999"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <ul className="flex flex-col">
                  {navbarData.map((data) => {
                    return (
                      <li
                        key={data.id}
                        className="transition cursor-pointer hover:bg-[#FFF]/[0.05] flex flex-row items-center"
                      >
                        <div className="nav-link px-6 py-4 flex flex-row items-center gap-4">
                          <Image
                            src={data.icon}
                            alt={data.title}
                            width={500}
                            height={500}
                            className="w-[20px] h-[20px]"
                          />
                          <Scroll
                            to={data.link}
                            spy={true}
                            offset={-170}
                            smooth={true}
                            className="block"
                          >
                            {data.title}
                          </Scroll>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="px-6 py-4">
                <button className="rounded-[10px] bg-linearBluePink w-full px-4 transition-all duration-300 px-6 py-3 custom-shadow">
                  <Scroll to="contact" spy={true} offset={-170} smooth={true}>
                    Bog`lanish
                  </Scroll>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Mobile;
