import React, { useEffect, useState } from "react";
import { navbarData } from "@/data/navbar";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import { motion } from "framer-motion";
import Mobile from "./Mobile";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const listenScroll = () => {
    window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, [isScroll]);
  return (
    <header className={`fixed z-[200] w-full`}>
      {isScroll ? (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ stiffness: 200 }}
          className="w-full origin-top h-full absolute top-0 left-0 bg-[#1D2432]/[0.8] backdrop-blur"
        ></motion.div>
      ) : (
        ""
      )}
      <div className="custom-container py-4 relative">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <Link href={"/"} className="mr-8 font-yaBold text-[24px]">
              Brigade
            </Link>
            <ul className="md:flex hidden flex-row items-center gap-4 transition">
              {navbarData.map((data) => {
                return (
                  <li
                    key={data.id}
                    className="nav-link hover:scale-110 transition cursor-pointer"
                  >
                    <Scroll
                      to={data.link}
                      spy={true}
                      offset={-170}
                      smooth={true}
                    >
                      {data.title}
                    </Scroll>
                  </li>
                );
              })}
            </ul>
          </div>
          <Scroll to={"contact"} spy={true} offset={-170} smooth={true}>
            <button className="bg-linearBluePink hover:scale-110 transition-all duration-200 px-6 py-3 rounded-[10px] z-[102] active:scale-100 md:block hidden">
              Bog`lanish
            </button>
          </Scroll>
          <button className="md:hidden block" onClick={() => setOpen(!open)}>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L17 1"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 8L17 8"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 15L17 15"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <Mobile open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Navbar;
