import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Engagement from "@/app/assets/svgs/engagment";
import Autonomy from "@/app/assets/svgs/autonomy";
import Free from "@/app/assets/svgs/free";
import Earn from "@/app/assets/svgs/earn";
import ButtonToTop from "@/app/components/button-to-top";
import SignUpModal from "@/app/components/signup";
import { GridSectionProps } from "@/app/@types/common";

const CreatorSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleClickSignUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  const GridSection = ({
    svg: SvgComponent,
    header,
    content,
  }: GridSectionProps) => {
    return (
      <div className="flex flex-col gap-4 items-center md:items-start">
        <SvgComponent />
        <span className="text-2xl md:text-3xl text-black font-bold">
          {header}
        </span>
        <p className="text-base text-black w-9/12 text-center md:text-left">
          {content}
        </p>
      </div>
    );
  };

  return (
    <div>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 1 }}
        className="bg-[#ffffff] md:bg-white"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 md:justify-between md:py-16">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-6xl font-bold text-black leading-[114%]">
                Why become a creator?
              </h1>

              <p className="text-base text-black md:w-9/12">
                Engage with your supporter and subscriber to sell your skills,
                knowledge and passions
              </p>

              <button
                title="Become a member"
                onClick={handleClickSignUp}
                className="border w-44 md:w-56 border-black py-3 px-4 text-sm md:text-base rounded-full bg-black text-white hover:bg-gray-700"
              >
                Become a member
              </button>
            </div>

            <div className="flex flex-col gap-y-12 items-center justify-center md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-20">
              <GridSection
                svg={Engagement}
                header="Engagement"
                content="Engage on a deeper level with the fans that matter most"
              />
              <GridSection
                svg={Autonomy}
                header="Autonomy"
                content="Full autonomy on when and who you talk to."
              />
              <GridSection
                svg={Free}
                header="Free"
                content="No monthly fee or sign-up fee"
              />
              <GridSection
                svg={Earn}
                header="Earn"
                content="Add a new source of income that you can control"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="p-6 text-center md:text-left md:py-28 bg-black rounded-3xl flex flex-col gap-6 items-center justify-center">
            <h2 className="font-bold text-white leading-tight text-4xl md:text-[56px]">
              Engage without limits
            </h2>
            <p className="text-white text-base">
              Join a growing community and talk directly with your favorites
              creators
            </p>

            <button
              title="Get Started"
              className="border  border-black py-4 px-8 rounded-full bg-orange text-black text-sm hover:bg-[#ff9a56]"
              onClick={handleClickSignUp}
            >
              Get Started
            </button>
          </div>
        </div>

        <SignUpModal isOpen={isSignUpModalOpen} onClose={handleClickSignUp} />
      </motion.section>
      <ButtonToTop />
    </div>
  );
};

export default CreatorSection;
