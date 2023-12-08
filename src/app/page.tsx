import HeroSection from "@/app/pages/home";
import MarketplaceSection from "@/app/pages/marketplace";
import UpdateSection from "@/app/pages/update";
import CreatorSection from "@/app/pages/creator";
import FooterSection from "@/app/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UpdateSection />
      <MarketplaceSection />
      <CreatorSection />
      <FooterSection />
    </main>
  );
}
