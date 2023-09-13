import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ContactMo = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <section className="fixed top-0 left-0 w-full h-screen bg-white/[0.05] z-[500] backdrop-blur flex items-center">
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="md:p-6 p-3 bg-black md:w-[60%] w-[90%] m-auto rounded-[10px] custom-shadow"
          >
            <div className="flex items-center justify-between">
              <p>Xizmatdan Foydalanish</p>
              <div
                className="w-[35px] h-[35px] p-2 flex items-center justify-center bg-white/[0.05] cursor-pointer rounded-full"
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
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  );
};

export default ContactMo;
