"use client"

import Image from "next/image";
import underline from "@/public/hero_underline.png";
import body_image from "@/public/Vector.svg";

import image1 from "@/public/trust_carousel_image1.svg";
// import clip from "@/public/trust_video_clip.mp4";
import icon from '@/public/arrow_up_right.png'

//shadcn 
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"

  import Autoplay from "embla-carousel-autoplay"
  

const Trust: React.FC = () => {
  return (
    <div className="h-auto w-full md:py-[72px] py-[40px] flex flex-col items-center gap-[100px]">
        {/* heading and underline */}
        <div className="flex flex-col md:h-[70px] md:w-[1021px] items-center justify-center">
            <p className=" text-dark_text_blue text-center md:font-[600] font-bold md:text-[56px] text-[25px] leading-none md:w-full">51 Lakh+ Patients Trust Us</p>
            <Image src={underline} alt="underline" className="h-[5px] w-[200px]"></Image>
        </div>

        {/* body and carousel */}
        <div className="flex md:flex-row flex-col items-center justify-center gap-[100px] w-full">
            {/* body */}
            <div className="flex flex-col h-auto w-[580px] gap-[30px]">
                <div className="flex md:flex-row flex-col items-center gap-[25px]">
                    <Image src={body_image} alt="body_image"></Image>
                    <div className="flex flex-col w-[238px] gap-[10px]">
                        <p className="text-dark_text_blue md:font-[600] font-bold md:text-[20px] text-[16px] w-full leading-normal">Healthcare with Integrity</p>
                        <p className="text-body_text_white font-[500] md:text-[15px] text-[12px] leading-normal">High-quality, affordable healthcare services for every individual, at every stage of life.</p>
                    </div>
                </div>
                <p className="text-body_text_white text-justify font-[500] md:text-[18px] text-[14px] leading-normal md:px-[0] px-[125px]">
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

        {/* animated pics */}
        <div className="">

        </div>

        {/* video clip */}
        <video src="public/trust_video_clip.mp4" autoPlay muted loop className="bg-red-700 w-[1062px] h-[452px]"></video>

        {/* Trust Ending section */}
        <div className="flex flex-col items-center justify-center gap-[25px] h-auto w-[1228px]">
            <div className="flex flex-col items-center">
                <p className="text-dark_text_blue text-center font-[600] text-[56px] leading-[70px] capitalize">Building trust through care</p>
                <Image src={underline} alt="underline" className=""></Image>
            </div>
            
            <p className="text-body_text_white text-center font-[500] text-[20px] leading-[31px] tracking-[0.3px] self-stretch">
            From life-saving treatments to everyday medical care, Velammal Hospital’s journey has always been about trust. Real stories of care, compassion, and cutting-edge healthcare delivered to every corner of South Tamil Nadu. Experience the values that make us more than just a hospital – we are a partner in your health and well-being.
            </p>

            <button className="w-auto h-[60px] py-[12px] px-[20px] bg-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px]">
                <p className="text-[16px] text-white font-semibold">Watch Playlist</p>
                <Image src={icon} alt="arrow up right"></Image>
            </button>
        </div>
        
    </div>
  );
};

export default Trust;