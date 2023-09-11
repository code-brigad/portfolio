import { teamData } from "@/data/team";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="custom-dots" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: false,
          autoplay: true,
          infinite: true
        }
      },
    ]
  };

  return (
    <section id="team" className="custom-container flex flex-col w-full mt-[20px] gap-4">
      <motion.div
        ref={ref}
        variants={container}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          transition: "1s",
        }}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center gap-2 justify-center text-center"
      >
        <h1 className="font-bold text-[42px]">Bizning Jamoa</h1>
        <div className="lg:w-[300px] w-full">
          <p className="font-normal text-center">
            Bizning “brigadamiz” a’zolari o’z ishining mutaxasislaridan iborat:
          </p>
        </div>
      </motion.div>
      <Slider {...settings}>
        {teamData.map((data) => {
          return (
            <div
              key={data.id}
              className="section-item overflow-hidden custom-shadow !flex flex-col gap-4 items-center justify-center"
            >
              <Image
                src={data.photo}
                alt={data.name}
                width={500}
                height={500}
                className="w-[60px]"
              />
              <ul className="text-center flex flex-col gap-2">
                <li className="font-medium text-center text-ellipsis truncate overflow-hidden font-avertaBold text-[20px]">
                  {data.name}
                </li>
                <li className="text-center uppercase truncate">{data.profession}</li>
                <ul className="flex flex-row items-center gap-3 justify-center">
                  <li
                    className={`bg-pink rounded-full w-[28px] h-[28px] flex items-center justify-center ${
                      data.instagram.length > 0
                        ? "cursor-pointer opacity-100"
                        : "cursor-default opacity-50"
                    }`}
                  >
                    <Link href={data.instagram} className={`${data.instagram.length > 0 ? "cursor-pointer" : "cursor-default"}`}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99866 3.33262C4.08055 3.33262 3.33131 4.08188 3.33131 5C3.33131 5.91812 4.08055 6.66738 4.99866 6.66738C5.91676 6.66738 6.666 5.91812 6.666 5C6.666 4.08188 5.91676 3.33262 4.99866 3.33262ZM9.99944 5C9.99944 4.30953 10.0057 3.62532 9.96692 2.93611C9.92815 2.13556 9.74553 1.42508 9.16014 0.839689C8.57351 0.253043 7.86429 0.0716702 7.06376 0.032894C6.37331 -0.00588219 5.68911 0.000372057 4.99991 0.000372057C4.30945 0.000372057 3.62525 -0.00588219 2.93605 0.032894C2.13553 0.0716702 1.42506 0.254294 0.839674 0.839689C0.253038 1.42634 0.0716689 2.13556 0.0328934 2.93611C-0.00588208 3.62657 0.00037205 4.31078 0.00037205 5C0.00037205 5.68922 -0.00588208 6.37468 0.0328934 7.06389C0.0716689 7.86444 0.254289 8.57492 0.839674 9.16031C1.42631 9.74696 2.13553 9.92833 2.93605 9.96711C3.6265 10.0059 4.3107 9.99963 4.99991 9.99963C5.69036 9.99963 6.37456 10.0059 7.06376 9.96711C7.86429 9.92833 8.57476 9.74571 9.16014 9.16031C9.74678 8.57366 9.92815 7.86444 9.96692 7.06389C10.0069 6.37468 9.99944 5.69047 9.99944 5ZM4.99866 7.56548C3.57897 7.56548 2.43322 6.41971 2.43322 5C2.43322 3.58029 3.57897 2.43452 4.99866 2.43452C6.41834 2.43452 7.56409 3.58029 7.56409 5C7.56409 6.41971 6.41834 7.56548 4.99866 7.56548ZM7.66916 2.9286C7.33769 2.9286 7.07002 2.66092 7.07002 2.32945C7.07002 1.99797 7.33769 1.73029 7.66916 1.73029C8.00063 1.73029 8.2683 1.99797 8.2683 2.32945C8.2684 2.40816 8.25297 2.48611 8.2229 2.55885C8.19282 2.63159 8.14869 2.69768 8.09304 2.75333C8.03738 2.80899 7.9713 2.85312 7.89856 2.88319C7.82582 2.91327 7.74787 2.9287 7.66916 2.9286Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li
                    className={`bg-linkedin rounded-full w-[28px] h-[28px] flex items-center justify-center ${
                      data.linkedin.length > 0
                        ? "cursor-pointer opacity-100"
                        : "cursor-default opacity-50"
                    }`}
                  >
                    <Link href={data.linkedin} className={`${data.linkedin.length > 0 ? "cursor-pointer" : "cursor-default"}`}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.49445 1.55862C2.49445 2.147 2.05158 2.61762 1.3402 2.61762H1.32745C0.642704 2.61762 0.199829 2.147 0.199829 1.55862C0.199829 0.9575 0.656204 0.5 1.3537 0.5C2.0512 0.5 2.48133 0.9575 2.49445 1.55862ZM2.3602 3.45425V9.5825H0.320204V3.45425H2.3602ZM9.71545 9.5825V6.06875C9.71545 4.18625 8.70933 3.31025 7.3672 3.31025C6.28458 3.31025 5.7997 3.905 5.52895 4.32238V3.45425H3.48895C3.51595 4.0295 3.48895 9.5825 3.48895 9.5825H5.52895V6.15987C5.52895 5.97688 5.54208 5.79425 5.59608 5.663C5.74345 5.297 6.07908 4.91825 6.64233 4.91825C7.38108 4.91825 7.6762 5.48037 7.6762 6.30387V9.5825H9.71545Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li
                    className={`bg-github rounded-full w-[28px] h-[28px] flex items-center justify-center ${
                      data.github.length > 0
                        ? "cursor-pointer opacity-100"
                        : "cursor-default opacity-50"
                    }`}
                  >
                    <Link href={data.github} className={`${data.github.length > 0 ? "cursor-pointer" : "cursor-default"}`}>
                      <Image
                        src={"/images/icons/github.svg"}
                        alt="github"
                        width={500}
                        height={500}
                        className="w-[14px] h-[14px]"
                      />
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Team;
