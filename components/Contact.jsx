import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Selected from "./Selected";
import { motion, useScroll, useTransform } from "framer-motion";
import { bot_token, chat_id } from "../data/constants";
import { IMaskInput } from "react-imask";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+{998} (00) 000 00 00"
      definitions={{
        _: /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const Contact = () => {
  const [select, setSelect] = useState({ id: 0, title: "Xizmat turi" });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const [nameE, setNameE] = useState(false);
  const [phoneE, setPhoneE] = useState(false);
  const [selectE, setSelectE] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendData = async (e) => {
    e.preventDefault();

    if (name.length < 3 && phone.length < 11 && select.id == 0) {
      setErrorMsg(true);
      return;
    }

    if (name.length < 3) {
      setNameE(true);
      setErrorMsg(false);
      setPhoneE(false);
      setSelectE(false);
      return;
    }

    if (select.id == 0) {
      setSelectE(true);
      setErrorMsg(false);
      setNameE(false);
      setPhoneE(false);
      return;
    }

    if (phone.length < 11) {
      setPhoneE(true);
      setErrorMsg(false);
      setNameE(false);
      setSelectE(false);
      return;
    }

    setIsLoading(true);
    const message = `
    #code_brigade
    \n<b>Ismi:</b> ${name}
    \n<b>Raqam:</b> <code>${phone}</code>
    \n <b>Xizmat Turi:</b> ${select.title}`;

    try {
      const test = await axios.get(
        `https://api.telegram.org/bot${bot_token}/sendMessage`,
        {
          params: {
            chat_id: chat_id,
            text: message,
            parse_mode: "html",
          },
        }
      );
      console.log(test);
      setNameE(false);
      setErrorMsg(false);
      setSelectE(false);
      setPhoneE(false);
      setSubmitted(true);
      setName("");
      setPhone("");
      setMsg("");
      setSelect({ id: 0, title: "Xizmat turi" });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  }, [submitted]);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["0.2", "1"]);

  return (
    <motion.section
      ref={containerRef}
      style={{
        scale,
      }}
      id="contact"
      className="custom-container flex flex-col w-full mt-[20px] gap-4"
    >
      <div className="w-full">
        <div className="section-item transition-all flex justify-center flex-col items-center gap-[10px]">
          <h1 className="font-bold text-[42px]">Bog’lanish</h1>
          <p className="font-normal md:w-[30%] w-full text-center">
            Biz bilan bog’lanish uchun quyidagi ma’lumotlarni to’ldiring va
            “yuborish” tugmasini bosing.
          </p>
          <div className="md:w-[80%] w-full flex flex-col gap-5">
            <div className="w-full h-fit flex flex-col justify-center gap-[5px]">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="outline-none section-item w-full h-full"
                placeholder="Ismingiz"
                autocomplete="off"
                value={name}
              />
              {nameE ? (
                <h1 className="text-[red] ml-4">Ism kiritilmadi!</h1>
              ) : (
                ""
              )}
            </div>
            <div className="w-full h-fit flex flex-col justify-center gap-[5px]">
              <Selected setSelect={setSelect} select={select} />
              {selectE ? (
                <h1 className="text-[red] ml-4 text-[14px]">
                  Xizmat turi tanlanmadi!
                </h1>
              ) : (
                ""
              )}
            </div>
            <div className="w-full h-fit flex flex-col justify-center gap-[5px]">
              <TextMaskCustom
                type="tel"
                value={phone}
                autocomplete="off"
                id="phone"
                className="outline-none section-item w-full h-full"
                placeholder="Telefon raqam"
                onChange={(e) => setPhone(e.target.value)}
              />
              {phoneE ? (
                <h1 className="text-[red] ml-4 text-[14px]">
                  Telefon raqam kiritilmadi!
                </h1>
              ) : (
                ""
              )}
            </div>
          </div>
          {errorMsg ? (
            <h1 className="text-[red] text-[14px] text-start">
              Ma&apos;lumotlar kiritilmadi!
            </h1>
          ) : (
            ""
          )}
          <button
            onClick={sendData}
            className="flex min-w-[136px] max-w-[136px] px-6 py-3 overflow-hidden rounded-full bg-linearBluePink justify-center items-center gap-[10px]"
          >
            {isLoading ? (
              <motion.div
                initial={{ scale: 0.2 }}
                animate={{ scale: 1 }}
                className=""
              >
                <svg
                  className="animate-spin h-[25px] w-[25px] text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </motion.div>
            ) : submitted ? (
              <>
                <motion.div
                  variants={{
                    true: { x: 120, rotate: 45, scale: 1.3 },
                    false: { x: 0, rotate: 0, scale: 1 },
                  }}
                  initial={false}
                  transition={{ delay: 1, duration: 1 }}
                  animate={submitted ? "true" : "false"}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 14.6667C8.74867 14.6667 8.51667 14.5247 8.40333 14.298L6.42467 10.3407C6.316 10.1233 6.33467 9.86334 6.47267 9.66268L9.66667 5.33334L5.33667 8.52668C5.136 8.66534 4.876 8.68268 4.65867 8.57468L0.702001 6.59668C0.464668 6.47734 0.320001 6.22868 0.334668 5.96334C0.348668 5.69801 0.520001 5.46601 0.769334 5.37468L13.436 0.708009C13.6793 0.619342 13.9533 0.677342 14.138 0.862009C14.322 1.04534 14.382 1.32001 14.292 1.56401L9.62533 14.2307C9.53333 14.48 9.302 14.6513 9.03667 14.6653C9.02467 14.666 9.012 14.6667 9 14.6667Z"
                      fill="white"
                    />
                  </svg>
                </motion.div>
                <p>Yuborildi!</p>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.2 }}
                animate={{ scale: 1 }}
                className="flex flex-row justify-center items-center gap-[10px]"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 14.6667C8.74867 14.6667 8.51667 14.5247 8.40333 14.298L6.42467 10.3407C6.316 10.1233 6.33467 9.86334 6.47267 9.66268L9.66667 5.33334L5.33667 8.52668C5.136 8.66534 4.876 8.68268 4.65867 8.57468L0.702001 6.59668C0.464668 6.47734 0.320001 6.22868 0.334668 5.96334C0.348668 5.69801 0.520001 5.46601 0.769334 5.37468L13.436 0.708009C13.6793 0.619342 13.9533 0.677342 14.138 0.862009C14.322 1.04534 14.382 1.32001 14.292 1.56401L9.62533 14.2307C9.53333 14.48 9.302 14.6513 9.03667 14.6653C9.02467 14.666 9.012 14.6667 9 14.6667Z"
                    fill="white"
                  />
                </svg>
                <p>Yuborish</p>
              </motion.div>
            )}
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
