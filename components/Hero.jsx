import React from "react";

const Hero = () => {
  return (
    <section className="custom-container flex items-start gap-6 py-8 flex-col h-[500px] justify-center">
      <h1 className="md:text-[60px] sm:text-[36px] text-[28px] md:w-[80%] w-full font-bold text-pink">
        Kafolatlangan Natija va Sifat Uyg`unligi
      </h1>
      <p className="md:text-[16px] text-[14px] sm:w-[400px] w-full">
        - Oliy sifatli xizmat, mutaxassislardan eksklyuziv tavsiyalar va
        professional koʻmak
      </p>
      <button className="w-fit bg-linearBluePink hover:scale-110 transition-all duration-200 px-6 py-3 rounded-[10px] z-[102] active:scale-100 md:text-[16px] text-[14px]">
        Xizmatdan Foydalanish
      </button>
    </section>
  );
};

export default Hero;
