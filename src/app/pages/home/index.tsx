import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#ffffff] md:bg-white md:h-screen">
      <div className="container">
        <div className="hero md:pt-32 md:gap-96">
          <h1 className="text-4xl  md:text-[72px] font-bold leading-tight">
            Learn from your favorite creators about
            <span className="text-orange"> fantasy reports</span>
          </h1>

          <div className="relative mt-[-26px] md:mt-0 flex items-center justify-center border-2 border-black rounded-full h-[102px] w-[102px] md:h-[204px] md:w-[204px]">
            <div className="absolute flex justify-center text-center flex-col bg-black rounded-full h-[82px] w-[82px] md:h-[164px] md:w-[164px]">
              <span className="text-white text-xl md:text-4xl font-bold">
                1:1
              </span>
              <span className="text-white text-xs md:text-[20px] font-semibold tracking-wider">
                video calls
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
