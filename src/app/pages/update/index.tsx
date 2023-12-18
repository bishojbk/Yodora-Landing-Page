import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LuPen } from "react-icons/lu";
import Image from "next/image";
import Kendrick from "@/app/assets/images/kendrick.jpg";
import Cole from "@/app/assets/images/cole.jpg";
import Eminem from "@/app/assets/images/eminem.png";
import KAAN from "@/app/assets/images/kaan.jpg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { IoVideocamOffOutline } from "react-icons/io5";
import { CiMicrophoneOff } from "react-icons/ci";
import ChatSection from "@/app/components/chat";
import { MdCloseFullscreen } from "react-icons/md";
import UpdatePage from "@/app/assets/images/update.png";

interface FigureSectionProps {
  source: any;
  height: string;
  width: string;
  name: string;
}

const FigureSection = ({ source, height, width, name }: FigureSectionProps) => {
  return (
    <figure className="relative rounded-xl overflow-hidden">
      <Image
        src={source}
        alt="image"
        className={`${width} ${height} object-cover relative`}
      />
      <span className="absolute bottom-0 left-0 text-white bg-black px-2 py-1 rounded-tr-xl">
        {name}
      </span>
    </figure>
  );
};

const UpdateSection = () => {
  return (
    <div>
      <section className="hidden md:block container left-14 absolute top-[65%] z-10">
        <div className="border-[16px] border-black bg-white px-8 pt-3 pb-8 rounded-[50px] update">
          <div className="flex flex-col gap-8 rounded-[36px]">
            <div className="flex gap-3 items-center">
              <div className="bg-[#efeeee] flex gap-2 items-center px-3 py-2 rounded-sm text-sm text-[#8d8d8d] ">
                <BsArrowLeft /> Back
              </div>

              <div className="flex gap-3 font-semibold text-gray-600 items-center">
                Cortez weekly update <LuPen className="opacity-60" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="image-section-top">
                <FigureSection
                  source={Kendrick}
                  height="h-64"
                  width="30rem"
                  name="Kendrick Lamar"
                />
                <FigureSection
                  source={Cole}
                  width="30rem"
                  height="h-64"
                  name="J Cole"
                />
              </div>

              <div className="image-section-bottom">
                <FigureSection
                  source={Eminem}
                  width="30rem"
                  height="h-80"
                  name="Eminem"
                />

                <FigureSection
                  source={KAAN}
                  width="38rem"
                  height="h-80"
                  name="KAAN"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex gap-7 items-center">
              <div className="flex items-center gap-2 bg-[#4e4e4e] px-3 py-2 rounded-lg text-white text-sm cursor-pointer">
                <span className="text-xl">
                  <IoIosNotificationsOutline />
                </span>
                <span>Set alarm</span>
              </div>

              <div className="flex items-center gap-2 bg-[#4e4e4e] px-3 py-2 rounded-lg text-white text-sm cursor-pointer">
                <span className="text-lg">
                  <IoPersonAddOutline />
                </span>
                <span>Add People</span>
              </div>

              <div className="flex items-center border-2 border-black gap-1 bg-white px-3 py-[6px] rounded-lg text-black text-sm cursor-pointer">
                <span className="text-xl">
                  <RxExit />
                </span>
                <span>Leave reunion</span>
              </div>
            </div>

            <div className="relative">
              <Image
                src={Cole}
                alt="image"
                className="rounded-lg h-48 object-cover"
              />

              <div className="absolute bottom-2 right-2 text-xl z-50 flex gap-2 items-center">
                <div className="bg-[white] text-xl px-2 py-1 rounded-lg">
                  <IoVideocamOffOutline />
                </div>

                <div className="bg-[white] text-xl px-2 py-1 rounded-lg">
                  <CiMicrophoneOff />
                </div>

                <div className="bg-[white] text-xl px-2 py-1 rounded-lg">
                  <MdCloseFullscreen />
                </div>
              </div>
            </div>

            <ChatSection />
          </div>
        </div>
      </section>
      <div className="md:hidden absolute top-[60%] px-4">
        <Image src={UpdatePage} alt="UpdateSection"></Image>
      </div>
    </div>
  );
};

export default UpdateSection;
