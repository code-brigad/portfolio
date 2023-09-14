import React from "react";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="custom-container mt-12">
      <ul className="flex lg:flex-row flex-col justify-between lg:gap-4 gap-10">
        <li>
          <ul className="flex flex-col gap-3">
            <li className="font-yaBold mb-1"><Link href={"/"}>Brigade</Link></li>
            <li className="flex flex-row gap-2 items-center">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5 8.50051C11.5 7.11924 10.3808 6 9.00051 6C7.61924 6 6.5 7.11924 6.5 8.50051C6.5 9.88076 7.61924 11 9.00051 11C10.3808 11 11.5 9.88076 11.5 8.50051Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99951 19C7.80104 19 1.5 13.8984 1.5 8.56329C1.5 4.38664 4.8571 1 8.99951 1C13.1419 1 16.5 4.38664 16.5 8.56329C16.5 13.8984 10.198 19 8.99951 19Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Tashkent, Uzbekistan</p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.353 1.5C17.054 1.911 19.978 4.831 20.393 8.532"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.353 5.04297C15.124 5.38697 16.508 6.77197 16.853 8.54297"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0315 11.4724C14.0205 15.4604 14.9254 10.8467 17.4653 13.3848C19.9138 15.8328 21.3222 16.3232 18.2188 19.4247C17.8302 19.737 15.3613 23.4943 6.68447 14.8197C-1.99341 6.144 1.76157 3.67244 2.07394 3.28395C5.18377 0.173846 5.66682 1.58938 8.11539 4.03733C10.6541 6.5765 6.04254 7.48441 10.0315 11.4724Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>
                <Link href="tel:+998900610304">90 061 0304</Link>
              </p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9026 6.85107L12.4593 10.4641C11.6198 11.1301 10.4387 11.1301 9.59919 10.4641L5.11841 6.85107"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link href="mailto:support@brigade.uz">support@brigade.uz</Link>
            </li>
            <ul className="flex flex-row gap-3">
              <li className="p-[8px] border rounded-full opacity-[80%] hover:opacity-100 transition cursor-pointer">
                <Link href="https://t.me/code_brigad" target="_blank" className="">
                  <Image
                    src={"/images/icons/telegram.svg"}
                    alt="telegram"
                    width={500}
                    height={500}
                    className="w-[20px]"
                  />
                </Link>
              </li>
              <li className="p-[8px] border rounded-full opacity-[80%] hover:opacity-100 transition cursor-pointer">
                <Link href="https://www.instagram.com/code_brigad/" target="_blank" className="">
                  <Image
                    src={"/images/icons/instagram.svg"}
                    alt="telegram"
                    width={500}
                    height={500}
                    className="w-[20px]"
                  />
                </Link>
              </li>
              <li className="p-[8px] border rounded-full opacity-[80%] hover:opacity-100 transition cursor-pointer">
                <Link href="/" className="">
                  <Image
                    src={"/images/icons/linkedin.svg"}
                    alt="telegram"
                    width={500}
                    height={500}
                    className="w-[20px]"
                  />
                </Link>
              </li>
              <li className="p-[8px] border rounded-full opacity-[80%] hover:opacity-100 transition cursor-pointer">
                <Link href="https://github.com/code-brigad" target="_blank" className="">
                  <Image
                    src={"/images/icons/github.svg"}
                    alt="telegram"
                    width={500}
                    height={500}
                    className="w-[20px]"
                  />
                </Link>
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-3">
            <li className="font-avertaSemiBold text-[18px] mb-1">Xizmatlar</li>
            <li className="cursor-pointer">
              <Scroll to={"/"} spy={true} offset={-170} smooth={true}>
                Sayt Yaratish
              </Scroll>
            </li>
            <li className="cursor-pointer">
              <Scroll to={"/"} spy={true} offset={-170} smooth={true}>
                Mobile App Yaratish
              </Scroll>
            </li>
            <li className="cursor-pointer">
              <Scroll to={"/"} spy={true} offset={-170} smooth={true}>
                SMM Xizmati
              </Scroll>
            </li>
            <li className="cursor-pointer">
              <Scroll to={"/"} spy={true} offset={-170} smooth={true}>
                Dizayn Tayyorlash
              </Scroll>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-3">
            <li className="font-avertaSemiBold text-[18px] mb-1">Companiya</li>
            <li className="cursor-pointer">
              <Scroll to={"about"} spy={true} offset={-170} smooth={true}>
                Ma’lumot
              </Scroll>
            </li>
            <li className="cursor-pointer">
              <Link href={"https://t.me/code_brigad"} target="_blank">
                Yangiliklar
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-3">
            <li className="font-avertaSemiBold text-[18px] mb-1">Yordam</li>
            <li className="cursor-pointer">
              <Link href={"https://t.me/brigade_support"} target="_blank">
                Yordam Markazi
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"https://t.me/brigade_support"} target="_blank">
                Administrator
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"tel:+998900610304"}>
                Bog`lanish
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-3">
            <li className="font-avertaSemiBold text-[18px] mb-1">Manbalar</li>
            <li className="cursor-pointer">
              <Link href={"https://github.com/code-brigad/portfolio"} target="_blank">
                GitHub
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"https://t.me/code_brigad"} target="_blank">
                Telegram
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="border border-whiteBorder my-4"></div>
      <ul className="flex lg:flex-row flex-col gap-4 justify-between mb-4">
        <li>© 2023 Code Brigade</li>
        <li>Maxfiylik Siyosati</li>
      </ul>
    </footer>
  );
};

export default Footer;
