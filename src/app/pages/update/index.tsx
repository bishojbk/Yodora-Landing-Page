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
import { MdCloseFullscreen } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import UpdatePage from "@/app/assets/images/update.png";

interface FigureSectionProps {
  source: any;
  height: string;
  width: string;
  name: string;
}

interface TextSectionProps {
  text: string;
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

const TextSection = ({ text }: TextSectionProps) => {
  return (
    <div className="text-sm w-[65%] bg-gray-200 rounded-lg p-2">{text}</div>
  );
};

const UpdateSection = () => {
  return (
    <div>
      <section className="hidden md:block container left-14 absolute top-[57%] z-10">
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

            <TextSection text="I am coming already. I was at the tub." />

            <div className="grid gap-3">
              <div className="flex gap-3 items-center">
                <Image
                  src={Eminem}
                  alt="eminem"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-black text-sm">Marshall Mathers</span>
                <span className="text-black text-xs opacity-60">17:42</span>
              </div>

              <TextSection text="Hello there. How have you been?" />
              <TextSection text="Your presence alone would make angels question their perfection." />

              <div className="flex flex-col gap-2 items-end">
                <span className="text-black text-xs opacity-60">17:42</span>
                <TextSection text="GTA 6 is coming next year😍. Excited!!!" />
              </div>

              <div className="p-2 rounded-lg flex items-center gap-2 w-full bg-#fff shadow-sm">
                <span className="text-lg bg-gray-200 flex items-center justify-center rounded-lg py-1 px-3 cursor-pointer">
                  +
                </span>
                <input
                  title="Enter message"
                  className="w-full p-3 bg-transparent border-none outline-none placeholder:opacity-60 text-sm"
                  placeholder="Type a message"
                ></input>
                <div className="text-lg bg-[#4e4e4e] rounded-lg py-2 px-3 text-white cursor-pointer">
                  <FiSend />
                </div>
              </div>
            </div>
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
