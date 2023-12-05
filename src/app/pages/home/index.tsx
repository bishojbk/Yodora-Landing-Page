import React from "react";
import Link from "next/link";
import Logo from "@/app/assets/logo";

const HeroSection = () => {
  const ListItems = ["Explore", "Company", "Support"];

  return (
    <section className="bg-white h-screen">
      <div className="container">
        <header className="flex justify-between items-center">
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
        </header>

        <div className="hero grid grid-cols-2 pt-24 gap-96">
          <h1 className="text-7xl font-bold leading-tight">
            Learn from your favorite creators
            <br /> about <span className="text-orange">fantasy reports</span>
          </h1>

          <div className="relative flex items-center justify-center border-2 border-black rounded-full h-[204px] w-[204px]">
            <div className="absolute flex justify-center text-center flex-col bg-black rounded-full h-[164px] w-[164px]">
              <span className="text-white text-4xl font-bold">1:1</span>
              <span className="text-white font-semibold tracking-wider">
                video calls
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
