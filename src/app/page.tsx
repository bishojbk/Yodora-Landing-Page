import HeroSection from "@/app/pages/home";
import MarketplaceSection from "@/app/pages/marketplace";
import UpdateSection from "./pages/update";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UpdateSection />
      <MarketplaceSection />
    </main>
  );
}
