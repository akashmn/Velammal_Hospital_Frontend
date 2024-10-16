import Header from "@/components/Header";
import HeroCards from "@/components/Hero_cards";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Navbar/>
      <HeroSection/>
    </div>
  );
}
