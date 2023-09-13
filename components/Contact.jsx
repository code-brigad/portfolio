import React, { useState } from 'react'
import { selectData } from '@/data/select';
import Image from 'next/image';
import selected from '../public/images/icons/dropdown.svg'
import submit from '../public/images/icons/submit.svg'

const Contact = () => {
    const [hidden, setHidden] = useState(true)
    const [select, setSelect] = useState({
        id:0,
        title: "Xizmat turi"
    })

    return (
        <div className='custom-container w-full'>
            <div className='section-item flex justify-center flex-col items-center gap-[20px]'>
                <h1 className='font-bold text-[42px]'>Bog’lanish</h1>
                <p className='font-normal md:w-[50%] w-full text-center'>Biz bilan bog’lanish va xizmatlarimizdan foydalanish uchun quyidagi ma’lumotlarni
                    to’ldiring va “yuborish” tugmasini bosing.
                </p>
                <input  type="text" className='outline-none section-item w-[80%]' placeholder='Ismingiz' />
                <div className='section-item w-[80%] flex justify-between items-center h-[50px] relative' onClick={() => setHidden(!hidden)}>
                    <h1>{select?.title}</h1>
                    <Image src={selected} className='rotate-180 z-1'width={15}/>
                    <div className={hidden ? "hidden" : "flex z-[2] bg-black section-item gap-[10px] flex-col !p-0 absolute top-[50px] left-0 w-full"}>
                        {selectData.map((e) =>{
                            return (
                                <div className={`w-full p-4 rounded-[20px] ${e.id == select?.id ? "bg-[#FFF]/[0.05]" : ""}`} onClick={() => setSelect(e)}>{e.title}</div>
                            )
                        })}
                    </div>
                </div>
                <input type="text" className='outline-none section-item w-[80%]' placeholder='Telefon raqam' />
                <button className='flex px-6 py-3 rounded-[10px] bg-linearBluePink justify-center items-center gap-[10px]'>
                    <Image src={submit} width={15}/>
                    <p>Yuborish</p>
                </button>
            </div>
        </div>
    )
}

export default Contact