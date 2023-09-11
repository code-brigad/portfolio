import React from "react";

const Hero = () => {
  return (
    <section className="custom-container flex items-start gap-6 py-8 flex-col h-[500px] justify-center">
      <h1 className="lg:text-[60px] text-[32px] uppercase font-bold leading-none text-pink">
        Kafolatlangan Natija
      </h1>
      <p className="lg:text-[16px] text-[14px]">
        - Oliy sifatli xizmat, mutaxassislardan eksklyuziv <br /> tavsiyalar va
        professional koʻmak
      </p>
      <button className="w-fit bg-linearBluePink hover:scale-110 transition-all duration-200 px-6 py-3 rounded-[10px] z-[102] active:scale-100 lg:text-[16px] text-[14px]">
        Xizmatdan Foydalanish
      </button>
    </section>
  );
};

export default Hero;
