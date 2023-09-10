import React from "react";
import { motion } from "framer-motion";
import { navbarData } from "@/data/navbar";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";

const Mobile = ({ open, setOpen }) => {
  return (
    <>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              stiffness: 500,
            }}
            className="absolute overflow-hidden md:hidden block top-0 left-0 w-full h-screen bg-[url('/images/menu.png')] bg-cover z-[101]"
          >
            <div className="my-2 py-2 px-4 flex flex-row justify-between items-center">
              <Link href={"/"} className="mr-8 font-bold">
                Code Brigade
              </Link>
              <div className="cursor-pointer" onClick={() => setOpen(!open)}>
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
            <div className="flex flex-col h-[calc(100%-80px)] justify-between">
              <ul className="flex flex-col">
                {navbarData.map((data) => {
                  return (
                    <li
                      key={data.id}
                      className="transition cursor-pointer hover:bg-[#FFF]/[0.05]"
                    >
                      <Scroll
                        to={data.link}
                        spy={true}
                        offset={-50}
                        smooth={true}
                        className="px-4 py-4 block"
                      >
                        {data.title}
                      </Scroll>
                    </li>
                  );
                })}
              </ul>
              <div className="px-4 py-4">
                <button className="rounded-[10px] bg-linearBluePink w-full px-4 transition-all duration-300 px-6 py-3 custom-shadow">
                  <Scroll to="#contact" spy={true} offset={-50} smooth={true}>
                    Bog`lanish
                  </Scroll>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Mobile;
