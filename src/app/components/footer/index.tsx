import React from "react";
import Logo from "@/app/assets/logo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Facebook from "@/app/assets/svgs/facebook";
import Twitter from "@/app/assets/svgs/twitter";
import ButtonToTop from "@/app/components/button-to-top";
import Instagram from "@/app/assets/svgs/instagram";
import Link from "next/link";
import { ListSectionProps } from "@/app/@types/common";

const FooterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const ListSection = ({
    header,
    listOne,
    listTwo,
    listThree,
  }: ListSectionProps) => {
    return (
      <ul className="">
        <li className="text-lg font-bold pb-4">{header}</li>
        <li className="pb-2">{listOne}</li>
        <li className="pb-2">{listTwo}</li>
        <li>{listThree}</li>
      </ul>
    );
  };
  return (
    <div>
      <motion.footer
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 1 }}
        className="bg-[#ffffff] md:bg-white py-6  md:py-16"
      >
        <div className="container">
          <div className="footer">
            <div className="hidden md:flex flex-col gap-16">
              <Logo />

              <div className="flex gap-3">
                <Link href="#" className="facebook social-links cursor-pointer">
                  <Facebook />
                </Link>
                <Link href="#" className="social-links cursor-pointer">
                  <Twitter />
                </Link>
                <Link href="#" className="social-links cursor-pointer">
                  <Instagram />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
              <ListSection
                header="About"
                listOne="How it works"
                listTwo="Company"
                listThree="Help & Support"
              />
              <ListSection
                header="For creators"
                listOne="How can I get paid?"
                listTwo="Become a creator"
                listThree=""
              />
              <ListSection
                header="Learn"
                listOne="Blog"
                listTwo="Cookies & Policies"
                listThree="Privacy Policy"
              />
              <ListSection
                header="Support"
                listOne="Service Status"
                listTwo="Report Abuse"
                listThree="Dispute a payment"
              />
            </div>

            <div className="flex flex-col items-center gap-4 md:hidden ">
              <Logo />
              <div className="flex gap-3">
                <Facebook />
                <Twitter />
                <Instagram />
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
      <ButtonToTop />
    </div>
  );
};

export default FooterSection;
