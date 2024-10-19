"use client";

import Image from 'next/image';
import icon from "@/public/24_7.svg";
import calling_icon from "@/public/emergency_caller.svg";
import ambulance from "@/public/ambulance.svg";
import image1 from "@/public/emergency_care_image.svg";

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
        <div className="flex flex-col gap-[20px] md:gap-[50px]">
          {/* icon and main heading */}
          <div className="flex flex-row gap-[15px] items-center">
            <Image src={icon} alt="icon" />
            <p className="text-white text-[32px] md:text-[56px] font-semibold capitalize leading-[40px] md:leading-[128px]">
              Critical Care
            </p>
          </div>
          <p className="text-white text-[24px] md:text-[40px] font-semibold capitalize leading-[32px] md:leading-[128px]">
            When Every Second Counts
          </p>
        </div>

        {/* subheading and body */}
        <div className="w-full md:w-[543px] flex flex-col gap-[15px]">
          <p className="text-white text-[18px] md:text-[24px] font-semibold leading-[28px] md:leading-[37.2px] tracking-[0.36px] capitalize">
            Velammal’s commitment to saving lives never rests
          </p>
          <p className="text-white opacity-75 text-[16px] md:text-[20px] font-normal leading-[24px] md:leading-[31px] tracking-[0.3px] capitalize">
            Our 24/7 Critical Care services provide round-the-clock access to advanced life-saving technology and expert medical professionals, ensuring that patients in urgent need receive immediate attention and the highest standard of care.
          </p>
        </div>

        {/* Icons & Button */}
        <div className="mt-[20px] flex flex-col items-center justify-center gap-[20px] md:gap-[50px]">
          {/* icons */}
          <div className="flex flex-row gap-[40px] md:gap-[117px] items-center justify-center">
            {/* individual icons */}
            {Array(3).fill(0).map((_, idx) => (
              <div key={idx} className="flex flex-col gap-[8px] items-center">
                <Image src={ambulance} alt="ambulance" height={46} width={46} className="bg-highlight_yellow rounded-full p-2" />
                <p className="text-white text-[14px] md:text-[16px] text-center font-medium leading-[23px] capitalize">
                  Free Ambulance
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <button className="w-full md:w-[458px] h-[50px] md:h-[60px] py-[12px] px-[20px] bg-highlight_yellow flex flex-row items-center justify-evenly rounded-full gap-[15px]">
            <p className="text-white text-[14px] md:text-[20px] font-semibold leading-[24px] md:leading-[31px] tracking-[0.3px] capitalize">
              Call Now For 24x7 Emergency Care
            </p>
            <Image src={calling_icon} alt="call icon" className="bg-white rounded-full text-highlight_yellow p-1" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[100%]">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
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
