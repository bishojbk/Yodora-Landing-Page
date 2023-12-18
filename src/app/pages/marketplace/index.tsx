"use client";
import React from "react";
import Image from "next/image";
import Image1 from "@/app/assets/images/eminem.png";
import Image2 from "@/app/assets/images/jimmy.jpg";
import Image3 from "@/app/assets/images/orton.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FlexContainerProps {
  quantity: string;
  post: string;
}
interface ImageContainerProps {
  source: any;
  name: string;
}

const FlexContainer = (props: FlexContainerProps) => {
  return (
    <div className="flex flex-col leading-tight">
      <span className="text-orange text-[64px] font-bold">
        {props.quantity}
      </span>
      <span className="text-white text-[32px]">{props.post}</span>
    </div>
  );
};

const ImageContainer = (props: ImageContainerProps) => {
  return (
    <div className="relative">
      <Image
        src={props.source}
        alt="image"
        className="object-cover w-[392px] h-[522px] rounded-3xl"
      ></Image>

      <span className="absolute left-4 bottom-6 bg-black rounded-sm px-2 text-white">
        {props.name}
      </span>
    </div>
  );
};

const Marketplace = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 1 }}
      className="bg-black pt-16 mt-[67px] md:mt-0 md:pt-[446px] md:pb-[108px]"
    >
      <div className="container flex flex-col gap-12 md:gap-[116px]">
        <h2 className="text-4xl md:text-[64px] font-bold text-white m-0 leading-tight">
          <span className="text-orange">Get direct</span>
          <br />
          knowledge and insight.
        </h2>

        <div className="flex flex-col gap-6 md:flex md:flex-row md:justify-between">
          <ImageContainer source={Image1} name="Eminem" />
          <ImageContainer source={Image2} name="James" />
          <ImageContainer source={Image3} name="Randal" />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex flex-col items-center md:flex-row gap-12 md:gap-24">
            <FlexContainer quantity="300" post="creators" />
            <FlexContainer quantity="14.4k" post="users" />
            <FlexContainer quantity="9.11k" post="session" />
          </div>

          <div className="flex gap-5 cursor-pointer items-center leading-tight">
            <p className="text-white text-base md:text-[32px] pt-10">
              Explore the marketplace
            </p>

            <p className="text-base md:text-[64px] mt-10 font-light text-black flex items-center justify-center bg-orange hover:bg-[#FFA500] w-8 h-8 md:w-16 md:h-16 rounded-full transition duration-300">
              {">"}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Marketplace;
