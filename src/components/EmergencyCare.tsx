"use client";

import Image from 'next/image';
import icon from "@/public/24_7.svg";
import calling_icon from "@/public/emergency_calling_icon.svg";
import ambulance from "@/public/ambulance.svg";
import image1 from "@/public/emergency_care_image.svg";
import hourdricon from '@/public/icon/hourdricon.png'
import emergencyicuicon from '@/public/icon/emergencyicuicon.png'

// shadcn carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const EmergencyCare = () => {
  return (
    <div className="bg-dark_text_blue w-full h-auto flex flex-col md:flex-row items-center justify-between">
      {/* Emergency body and icons and button */}
      <div className="w-full md:w-1/2 py-[50px] md:py-[100px] md:px-0 px-5 pl-[20px] md:pl-[71.35px]">
        {/* heading and body */}
        <div className="flex flex-col gap-[20px] md:gap-[10px]">
          {/* icon and main heading */}
          <div className="flex flex-row gap-[25px] items-center">
            <Image src={icon} alt="icon" />
            <p className="text-white text-[32px] md:text-[56px] font-[600] capitalize leading-[40px] md:leading-[128px]">
              Critical Care
            </p>
          </div>
          <p className="text-white text-[24px] md:text-[40px] font-[600] capitalize leading-[32px] md:leading-[128px]">
            When Every Second Counts
          </p>
        </div>

        {/* subheading and body */}
        <div className="w-full md:w-[543px] flex flex-col gap-[15px]">
          <p className="md:w-[483px] text-white text-[18px] md:text-[24px] font-[600] leading-[28px] md:leading-[37.2px] tracking-[0.36px] capitalize">
            Velammal’s commitment to saving lives never rests
          </p>
          <p className="text-white opacity-75 text-[16px] md:text-[20px] font-[400] leading-[24px] md:leading-[31px] tracking-[0.3px] capitalize">
            Our 24/7 Critical Care services provide round-the-clock access to advanced life-saving technology and expert medical professionals, ensuring that patients in urgent need receive immediate attention and the highest standard of care.
          </p>
        </div>

        {/* Icons & Button */}
        <div className="mt-[40px] flex flex-col items-center justify-center  md:gap-[50px]">
          {/* icons */}
          <div className="flex flex-row gap-10 md:gap-[117px] mr-auto ">
            {/* individual icons */}
            
              <div  className="flex flex-row gap-12 items-center">
                <div className='flex flex-col gap-4'>
                <Image src={ambulance} alt="ambulance" height={46} width={46} className="bg-highlight_yellow lg:mx-8 mx-4 rounded-full p-2" />
                <p className="text-white text-[14px] md:text-[16px] text-center font-[500] leading-[23px] capitalize">
                  Free Ambulance
                </p>
                </div>
                <div className='flex flex-col gap-4'>
                <Image src={hourdricon} alt="ambulance" height={46} width={46} className="bg-highlight_yellow lg:mx-8 mx-4 rounded-full p-2" />
                <p className="text-white text-[14px] md:text-[16px] text-center font-[500] leading-[23px] capitalize">
                24Hr Doctor
                </p>
                </div>
                <div className='flex flex-col gap-4'>
                <Image src={emergencyicuicon} alt="ambulance" height={46} width={46} className="bg-highlight_yellow lg:mx-8 mx-4 rounded-full p-2" />
                <p className="text-white text-[14px] md:text-[16px] text-center font-[500] leading-[23px] capitalize">
                Emergency ICU
                </p>
                </div>
              </div>
            
          </div>

          {/* button */}
          <button className="mr-auto w-full mt-10 lg:mt-0 md:w-[458px] h-[50px] md:h-[60px] py-[12px] px-[20px] bg-highlight_yellow flex flex-row items-center justify-evenly rounded-full gap-[15px] hover:scale-105 transition-all duration-300 ease-in-out hover:drop-shadow-2xl group hover:bg-white">
            <p className="text-white text-[14px] md:text-[20px] font-[600] leading-[24px] md:leading-[31px] tracking-[0.3px] capitalize group-hover:text-black">
              Call Now For 24x7 Emergency Care
            </p>
            <Image src={calling_icon} alt="call icon" height={25} width={25} className="bg-white rounded-full text-highlight_yellow p-1" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[100%]">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent>
            <CarouselItem>
              <Image src={image1} alt="image1" className="object-cover w-full h-full" />
            </CarouselItem>
            <CarouselItem>
              <Image src={image1} alt="image2" className="object-cover w-full h-full" />
            </CarouselItem>
            <CarouselItem>
              <Image src={image1} alt="image3" className="object-cover w-full h-full" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default EmergencyCare;
