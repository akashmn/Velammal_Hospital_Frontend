"use client"

import Image from "next/image";
import underline from "@/public/hero_underline.png";
import body_image from "@/public/Vector.svg";

import image1 from "@/public/trust_carousel_image1.svg";
import icon from '@/public/arrow_up_right.png'

import Carousel2 from "@/components/trust_animated_carousel"

//shadcn 
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

const Trust: React.FC = () => {
  return (
    <div className="h-auto w-full md:py-[72px] py-[40px] flex flex-col items-center md:gap-[100px] gap-[50px]">
        {/* heading and underline */}
        <div className="flex flex-col items-center justify-center md:h-[70px] h-auto w-full md:w-[1021px] px-[15px]">
            <p className="text-dark_text_blue text-center font-bold md:font-[600] md:text-[56px] text-[35px] leading-none">51 Lakh+ Patients Trust Us</p>
            <Image src={underline} alt="underline" className="h-[5px] w-[200px]"></Image>
        </div>

        {/* body and carousel */}
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-[30px] gap-[50px] w-full px-[15px]">
            {/* body */}
            <div className="flex flex-col md:items-center h-auto md:w-[580px] w-full gap-[30px]">
                <div className="flex md:flex-row flex-col items-center md:items-start gap-[25px]">
                    <Image src={body_image} alt="body_image" className="md:w-[250px] w-[300px]  h-auto"></Image>
                    <div className="flex flex-col md:w-[238px] w-full gap-[10px] text-center md:text-left">
                        <p className="text-dark_text_blue font-bold md:font-[600] md:text-[18px] text-[16px] leading-normal">Healthcare with Integrity</p>
                        <p className="text-body_text_white font-[500] md:text-[15px] text-[12px] leading-normal">High-quality, affordable healthcare services for every individual, at every stage of life.</p>
                    </div>
                </div>
                <p className="text-body_text_white text-justify font-[500] md:text-[17px] text-[15px] leading-normal md:px-[20px] px-[15px]">
                    With over 51 lakh patients treated, Velammal Hospital stands as a beacon of healthcare excellence, offering world-class medical facilities, advanced technologies, and personalized care. Spanning 20 Lakhs square feet, Velammal Hospital is equipped with 2100 beds, 21 state-of-the-art operation theaters, 55 dialysis units, and specialized ICUs. Our modern facilities at Velammal Hospital Madurai combined with a dedicated team of over 450 doctors and 1100 nurses, ensure that every patient receives the highest quality care.
                    <br /><br />
                    From our neonatal ICU to our trusted transplant program, Velammal Hospital combines modern medical technology with compassionate care, serving millions with unmatched expertise.
                </p>
            </div>

            {/* carousel */}
            <Carousel
                plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                className="md:w-[700px] w-full h-auto rounded-lg px-[15px]"
            >
                <CarouselContent>
                    <CarouselItem>
                        <Image src={image1} alt="image1" className="w-full h-auto"></Image>
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={image1} alt="image1" className="w-full h-auto"></Image>
                    </CarouselItem>
                    <CarouselItem>
                        <Image src={image1} alt="image1" className="w-full h-auto"></Image>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>

        {/* animated automatic cards */}
        <Carousel2/>

        {/* Trust Ending section */}
        <div className="flex flex-col items-center justify-center gap-[25px] h-auto w-full md:w-[1228px] px-[15px]">
            <div className="flex flex-col items-center">
                <p className="text-dark_text_blue text-center font-[600] md:text-[56px] text-[44px] leading-[50px] md:leading-[70px] capitalize">Building trust through care</p>
                <Image src={underline} alt="underline" className="h-2 w-[200px]"></Image>
            </div>
            
            <p className="text-body_text_white text-justify md:text-center font-[500] md:text-[20px] text-[15px] md:leading-[31px] leading-[25px] tracking-[0.3px]">
            From life-saving treatments to everyday medical care, Velammal Hospital’s journey has always been about trust. Real stories of care, compassion, and cutting-edge healthcare delivered to every corner of South Tamil Nadu. Experience the values that make us more than just a hospital – we are a partner in your health and well-being.
            </p>

            <button className="w-auto h-[60px] py-[12px] px-[20px] bg-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px] hover:scale-105 transition-all duration-300 ease-in-out hover:drop-shadow-2xl group">
                <p className="text-[16px] text-white font-semibold">Watch Playlist</p>
                <Image src={icon} alt="arrow up right" className="transition-transform duration-300 ease-in-out group-hover:rotate-45"></Image>
            </button>
        </div>
    </div>
  );
};

export default Trust;
