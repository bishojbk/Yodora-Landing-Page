import React, { useState } from "react";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import Eminem from "@/app/assets/images/eminem.png";

interface TextSectionProps {
  text: string;
  side: boolean;
}

const MAX_MESSAGES = 4;

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; side: boolean }[]>(
    []
  );
  const [side, setSide] = useState(true);

  const GetCurrentTime = () => {
    const Time = new Date();
    const currentHour = Time.getHours();
    const currentMinute = Time.getMinutes();

    return (
      <span className="text-black text-xs opacity-60">
        {currentHour}:{currentMinute}
      </span>
    );
  };

  const TextArea = ({ text, side }: TextSectionProps) => {
    return (
      <div className={`flex flex-col gap-2 items-${side ? "start" : "end"}`}>
        <GetCurrentTime />
        <div className="text-sm w-[65%] bg-gray-200 rounded-lg p-2">{text}</div>
      </div>
    );
  };

  const handleChangeSide = () => {
    setSide((prevSide) => !prevSide);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setMessage((prevMessage) =>
      prevMessage !== inputValue ? inputValue : prevMessage
    );
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, side: side },
      ]);
      setMessage("");
    }
  };

  return (
    <div>
      <div className="grid gap-3">
        <div className="flex gap-3 items-center">
          <Image src={Eminem} alt="eminem" className="w-10 h-10 rounded-full" />
          <span className="text-black text-sm">Marshall Mathers</span>
        </div>

        {messages.slice(-MAX_MESSAGES).map((msg, index) => (
          <TextArea key={index} text={msg.text} side={msg.side} />
        ))}

        <form
          onSubmit={handleOnSubmit}
          className="p-2 rounded-lg flex items-center gap-2 w-full bg-#fff shadow-sm"
        >
          <span
            onClick={handleChangeSide}
            className="text-lg bg-gray-200 flex items-center justify-center rounded-lg py-1 px-3 cursor-pointer"
          >
            +
          </span>
          <input
            title="Enter message"
            className="w-full p-3 bg-transparent border-none outline-none placeholder:opacity-60 text-sm"
            placeholder="Type a message"
            onChange={handleOnChange}
          />
          <div className="text-lg bg-[#4e4e4e] rounded-lg py-2 px-3 text-white cursor-pointer">
            <FiSend onClick={handleOnSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
