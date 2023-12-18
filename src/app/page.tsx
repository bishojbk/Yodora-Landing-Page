"use client";

import HeroSection from "@/app/pages/home";
import MarketplaceSection from "@/app/pages/marketplace";
import UpdateSection from "@/app/pages/update";
import CreatorSection from "@/app/pages/creator";
import FooterSection from "@/app/components/footer";
import HeaderSection from "@/app/components/header";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <UpdateSection />
        <MarketplaceSection />
        <CreatorSection />
      </main>
      <FooterSection />
    </>
  );
}
