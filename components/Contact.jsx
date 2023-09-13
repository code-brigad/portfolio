import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import submit from '../public/images/icons/submit.svg'
import { motion, useAnimation, useInView } from 'framer-motion';
import Selected from './Selected';
import axios from 'axios';
import { bot_token, chat_id } from '../data/constants';
import { IMaskInput } from 'react-imask';

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
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMsg] = useState("")
    console.log(msg);

    const [select, setSelect] = useState({
        id: 0,
        title: "Xizmat turi"
    })
    console.log(select, "father");

    const [nameE, setNameE] = useState(false)
    const [phoneE, setPhoneE] = useState(false)
    const [selectE, setSelectE] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const sendData = async (e) => {
        e.preventDefault()

        if (name.length < 3 && phone.length < 11 && select.id == 0) {
            setErrorMsg(true)
            return
        }

        if (name.length < 3) {
            setNameE(true)
            return
        }

        if (select.id == 0) {
            setSelectE(true)
            return
        }

        if (phone.length < 11) {
            setPhoneE(true)
            return
        }


        setIsLoading(true)
        const message = `👤Yangi foydalanuvchi
        \n<b>Ismi:</b> <i>${name}</i>
        \n<b>Raqam:</b> <code>${phone}</code>
        \n <b>Xabar matni:</b> <code>${msg}</code>`;

        try {
            await axios.get(
                `https://api.telegram.org/bot${bot_token}/sendMessage`,
                {
                    params: {
                        chat_id: chat_id,
                        text: message,
                        parse_mode: "html"
                    },
                }
            );
            setNameE(false)
            setErrorMsg(false)
            setPhoneE(false)
            selectE(false)
            setName("")
            setPhone("")
            setMsg("")
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
        console.log(message)
    }
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
                    <div className='md:w-[80%] w-full flex flex-col justify-center gap-[10px]'>
                        <input type="text" onChange={(e) => setName(e.target.value)} className='outline-none section-item w-full' placeholder='Ismingiz' />
                        {nameE ? <h1 className='text-[red]'>Ism kiritilmadi</h1> : ""}
                    </div>
                    <div className='md:w-[80%] w-full flex flex-col justify-center gap-[10px]'>
                        <Selected setSelect={setSelect} select={select} />
                        {selectE ? <h1 className='text-[red]'>Xizmat turi tanlanmadi</h1> : ""}
                    </div>
                    <div className='md:w-[80%] w-full flex flex-col justify-center gap-[10px]'>
                        <TextMaskCustom type="tel" value={phone} id="phone" className='outline-none section-item w-full' placeholder='Telefon raqam' onChange={(e) => setPhone(e.target.value)} />
                        {phoneE ? <h1 className='text-[red]'>Telefon nomer kiritilmadi</h1> : ""}
                    </div>
                    <button onClick={sendData} className='flex px-6 py-3 rounded-[10px] bg-linearBluePink justify-center items-center gap-[10px]'>
                        <Image alt='submit' src={submit} width={15} />
                        <p>Yuborish</p>
                    </button>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact