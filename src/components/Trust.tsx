"use client"

import Image from "next/image";
import underline from "@/public/hero_underline.png";
import body_image from "@/public/Vector.svg";

import image1 from "@/public/trust_carousel_image1.svg";

//shadcn 
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import Autoplay from "embla-carousel-autoplay"
  

const Trust: React.FC = () => {
  return (
    <div className="h-auto w-full py-[72px] flex flex-col items-center gap-[100px]">
        {/* heading and underline */}
        <div className="flex flex-col h-[70px] w-[1021px] items-center justify-center">
            <p className=" text-dark_text_blue text-center font-[600] text-[56px] leading-none">51 Lakh+ Patients Trust Us</p>
            <Image src={underline} alt="underline"></Image>
        </div>

        {/* body and carousel */}
        <div className="flex flex-row items-center justify-center gap-[100px] w-full">
            {/* body */}
            <div className="flex flex-col h-auto w-[580px] gap-[30px]">
                <div className="flex flex-row gap-[25px]">
                    <Image src={body_image} alt="body_image"></Image>
                    <div className="flex flex-col w-[238px] gap-[10px]">
                        <p className="text-dark_text_blue font-[600] text-[20px] w-full leading-normal">Healthcare with Integrity</p>
                        <p className="text-body_text_white font-[500] text-[15px] leading-normal">High-quality, affordable healthcare services for every individual, at every stage of life.</p>
                    </div>
                </div>
                <p className="text-body_text_white text-justify font-[500] text-[18px] leading-normal">
                With over 51 lakh patients treated, Velammal Hospital stands as a beacon of healthcare excellence, offering world-class medical facilities, advanced technologies, and personalized care. Spanning 20 Lakhs square feet, Velammal Hospital is equipped with 2100 beds, 21 state-of-the-art operation theaters, 55 dialysis units, and specialized ICUs. Our modern facilities at Velammal Hospital Madurai combined with a dedicated team of over 450 doctors and 1100 nurses, ensure that every patient receives the highest quality care. <br /><br />
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
                    
                    className="w-[600px] h-auto rounded-lg"
                >
                    <CarouselContent>
                        <CarouselItem>
                            <Image src={image1} alt="image1"></Image>
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={image1} alt="image1"></Image>
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={image1} alt="image1"></Image>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
        </div>
    </div>
  );
};

export default Trust;