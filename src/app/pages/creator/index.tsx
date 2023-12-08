import React from "react";

import Engagement from "@/app/assets/svgs/engagment";
import Autonomy from "@/app/assets/svgs/autonomy";
import Free from "@/app/assets/svgs/free";
import Earn from "@/app/assets/svgs/earn";

interface GridSectionProps {
  svg: any;
  header: string;
  content: string;
}

const CreatorSection = () => {
  const GridSection = ({
    svg: SvgComponent,
    header,
    content,
  }: GridSectionProps) => {
    return (
      <div className="flex flex-col gap-4">
        <SvgComponent />
        <span className="text-3xl text-black font-bold">{header}</span>
        <p className="text-sm text-black w-9/12">{content}</p>
      </div>
    );
  };

  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex gap-24 justify-between py-16">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-bold text-black leading-[114%]">
              Why become a creator?
            </h1>

            <p className="text-sm text-black w-9/12">
              Engage with your supporter and subscriber to sell your skills,
              knowledge and passions
            </p>

            <button
              title="Become a member"
              className="border w-56 border-black py-4 px-8 rounded-full bg-black text-white hover:bg-gray-700"
            >
              Become a member
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-20">
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
        <div className="py-28 bg-black rounded-3xl flex flex-col gap-6 items-center justify-center">
          <h2 className="font-bold text-white text-[56px]">
            Engage without limits
          </h2>
          <p className="text-white text-sm">
            Join a growing community and talk directly with your favorites
            creators
          </p>

          <button
            title="Get Started"
            className="border  border-black py-4 px-8 rounded-full bg-orange text-black text-sm hover:bg-[#ff9a56]"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
