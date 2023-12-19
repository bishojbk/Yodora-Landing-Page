import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { threshold } from "@/app/utils/common";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrolled = window.scrollY;

    scrolled > threshold ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="fixed bottom-5 right-5 ">
      <div
        onClick={handleGoToTop}
        className={`text-4xl cursor-pointer transition-opacity duration-500 ${
          showButton ? "opacity-100" : "opacity-0"
        } text-[#ffb547]`}
      >
        <FaRegArrowAltCircleUp />
      </div>
    </section>
  );
};

export default ScrollToTop;
