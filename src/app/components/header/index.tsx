"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/app/assets/logo";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import SignIn from "@/app/components/signin";
import SignUp from "@/app/components/signup";
import { useInView } from "react-intersection-observer";
import HamburgerMenu from "@/app/assets/svgs/hamburger";

const Header = () => {
  const ListItems = ["Explore", "Company", "Support"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleClickHamMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickSignIn = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const handleClickSignUp = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const html = document.documentElement;
    document.body.classList.toggle("overflow-y-hidden", isMenuOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 1 }}
      className="bg-[#ffffff] md:bg-white"
    >
      <div>
        <div className="hidden container md:flex justify-between items-center">
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
            <Link href="#" className="text-black" onClick={handleClickSignUp}>
              Become a member
            </Link>
            <button
              title="Sign In"
              className="border border-black py-4 px-8 rounded-full bg-black text-white hover:bg-gray-700"
              onClick={handleClickSignIn}
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
            isMenuOpen ? "translate-y-0" : "translate-y-[-100vh]"
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
              <Link href="#" className="text-black" onClick={handleClickSignUp}>
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
      <SignIn isOpen={isSignInModalOpen} onClose={handleClickSignIn} />
      <SignUp isOpen={isSignUpModalOpen} onClose={handleClickSignUp} />
    </motion.header>
  );
};

export default Header;
