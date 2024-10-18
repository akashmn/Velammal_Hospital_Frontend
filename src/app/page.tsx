import Departments from "@/components/Departments";
import EmergencyCare from "@/components/EmergencyCare";
import Experts from "@/components/Experts";
import { AccordionDemo } from "@/components/Faq";
import Header from "@/components/Header";
import HelpDesk from "@/components/HelpDesk";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Network from "@/components/Network";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Navbar/>
      <HeroSection/>
      <Departments/>
      <Trust/>
      <Network/>
      <Experts/>
      <HelpDesk/>
      <EmergencyCare/>
      <AccordionDemo/>
    </div>
  );
}
