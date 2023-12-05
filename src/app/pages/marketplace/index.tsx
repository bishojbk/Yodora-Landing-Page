import React from "react";
import Image from "next/image";
import Image1 from "@/app/assets/images/img-card.png";
import Image2 from "@/app/assets/images/img-card (1).png";
import Image3 from "@/app/assets/images/img-card (2).png";

interface FlexContainerProps {
  quantity: string;
  post: string;
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

const Marketplace = () => {
  return (
    <section className="bg-black pt-[446px] pb-[108px]">
      <div className="container flex flex-col gap-[116px]">
        <h2 className=" text-[64px] font-bold text-white m-0 leading-tight">
          <span className="text-orange">Get direct</span>
          <br />
          knowledge and insight.
        </h2>

        <div className="flex justify-between">
          <Image src={Image1} alt="image"></Image>
          <Image src={Image2} alt="image"></Image>
          <Image src={Image3} alt="image"></Image>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-24">
            <FlexContainer quantity="300" post="creators" />
            <FlexContainer quantity="14.4k" post="users" />
            <FlexContainer quantity="9.11k" post="session" />
          </div>

          <div className="flex gap-5 cursor-pointer items-center leading-tight">
            <p className="text-white text-[32px] pt-10">
              Explore the <br /> marketplace
            </p>

            <p className="text-[64px] mt-10 font-light text-black flex items-center justify-center bg-orange hover:bg-[#FFA500] w-[64px] h-[64px] rounded-full transition duration-300">
              {">"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
