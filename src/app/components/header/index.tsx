"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/app/assets/logo";
import { RxCross1 } from "react-icons/rx";
import HamburgerMenu from "@/app/assets/svgs/hamburger";

const Header = () => {
  const ListItems = ["Explore", "Company", "Support"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickHamMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const html = document.documentElement;
    document.body.classList.toggle("overflow-y-hidden", isMenuOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white relative">
      <div className="container absolute left-20">
        <div className="hidden md:flex justify-between items-center">
          <div className="flex gap-10 items-center">
            <Logo />
            <nav>
              <ul className="flex gap-6">
                {ListItems.map((item) => (
                  <li
                    key={item}
                    className="font-[500] text-black cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex gap-6 items-center">
            <Link href="#" className="text-black">
              Become a member
            </Link>
            <button
              title="Sign In"
              className="border border-black py-4 px-8 rounded-full bg-black text-white hover:bg-gray-700"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between container md:hidden">
        <div>
          <Logo />
        </div>

        <div onClick={handleClickHamMenu} className="z-10 ">
          <HamburgerMenu />
        </div>

        <div
          className={`absolute right-0 left-0 top-0 z-20 bg-[#fff] h-screen ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } ${isMenuOpen ? "overflow-hidden" : ""}
          transition duration-700`}
        >
          <div className="absolute right-5 top-9" onClick={handleClickHamMenu}>
            <RxCross1 />
          </div>
          <ul className="flex flex-col gap-6 items-center mt-36">
            {ListItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>
              <Link href="#" className="text-black">
                Become a member
              </Link>
            </li>
            <button
              title="Sign In"
              className="border border-black py-1 px-4 rounded-full bg-black text-white hover:bg-gray-700"
            >
              Sign in
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
