"use client";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { TextSectionProps } from "@/app/@types/common";
import { MAX_MESSAGES } from "@/app/utils/common";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; side: boolean }[]>(
    []
  );
  const [side, setSide] = useState(true);

  const getCurrentTime = () => {
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
    const splitMessage = (message: any, chunkSize: any) => {
      const regex = new RegExp(`.{1,${chunkSize}}`, "g");
      return message.match(regex) || [];
    };

    const chunks = splitMessage(text, 46);

    return (
      <div>
        <div className={`flex flex-col gap-2 items-end`}>
          {getCurrentTime()}
          <div className="text-sm w-9/12 bg-gray-200 rounded-lg p-2">
            {chunks.map((chunk: any, index: any) => (
              <p key={index} className="whitespace-pre">
                {chunk}
              </p>
            ))}
          </div>
        </div>
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
      <div className="flex flex-col gap-2">
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
