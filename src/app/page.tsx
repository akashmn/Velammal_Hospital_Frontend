import Departments from "@/components/Departments";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Navbar/>
      <HeroSection/>
      <Departments/>
    </div>
  );
}
