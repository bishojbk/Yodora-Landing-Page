import React from "react";
import Logo from "@/app/assets/logo";
import Facebook from "@/app/assets/svgs/facebook";
import Twitter from "@/app/assets/svgs/twitter";
import Instagram from "@/app/assets/svgs/instagram";

interface ListSectionProps {
  header: string;
  listOne: string;
  listTwo: string;
  listThree: string;
}
const FooterSection = () => {
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
    <footer className="bg-white py-16">
      <div className="container">
        <div className="footer">
          <div className="flex flex-col gap-16">
            <Logo />

            <div className="flex gap-3">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </div>

          <div className="flex justify-between">
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
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
