import Departments from "@/components/Departments";
import EmergencyCare from "@/components/EmergencyCare";
import Experts from "@/components/Experts";
import { AccordionDemo } from "@/components/Faq";
import Footer from "@/components/Footer";
import Footer_links from "@/components/Footer_links";
import Header from "@/components/Header";
import HelpDesk from "@/components/HelpDesk";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Network from "@/components/Network";
import News_Articles from "@/components/News_Articles";
import Testimonials from "@/components/Testimonials";
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
      {/* <Experts/> */}
      <HelpDesk/>
      <EmergencyCare/>
      <Testimonials/>
      <News_Articles/>
      <AccordionDemo/>
      <Footer_links/>
      <Footer/>
    </div>
  );
}
