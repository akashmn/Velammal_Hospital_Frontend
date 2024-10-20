import Image from "next/image"
import underline from "@/public/testimonial_underline.svg"
import vidya from "@/public/testimonial_vidya_image.svg"
import stars from "@/public/testimonial_review_star.svg"

import left from "@/public/testimonial_left_arrow.svg"
import right from "@/public/testimonial_right_arrow.svg"

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
        {/* heading & body */}
        <div className="mt-[100px] w-full flex flex-col items-center gap-[20px]">
            <div className="flex flex-col items-center justify-center">
                <p className="text-center text-3xl font-bold leading-[125%] uppercase text-dark_text_blue">Patient testimonials</p>
                <Image src={underline} alt="underline" className="w-[350px] -mt-2"></Image>
            </div>
            <p className="font-medium text-[20px] leading-[155%] tracking-[0.3px] md:w-[610px] text-center">We are proud of our exceptional team for their lifesaving efforts. Velammal, Saving Lives Through Expert Procedures</p>
        </div>

        {/* carousel */}
        <div className="flex flex-row gap-[20px] ml-[450px]">
            {/* individual cards */}
            <div className="h-[290px] w-[413px] rounded-xl p-5 drop-shadow-xl bg-white flex flex-col gap-[20px]">
                {/* dp and name and stars */}
                <div className="flex flex-row gap-[10px]">
                    <Image src={vidya} alt="" height={50} width={50}></Image>
                    <div>
                        <p className="text-dark_text_blue font-medium text-[16px] leading-[155%] tracking-[0.48px]">Vidya</p>
                        <Image src={stars} alt="stars" height={80} width={80} ></Image>
                    </div>

                </div>
                <p className="w-[356px] text-[16px]">
                Velammal Hospital has saved the life of a 1-year-old girl from Bangalore. Referred with breathing difficulties, experts at our ENT department swiftly diagnosed a groundnut blocking her airway. Thanks to the expertise of ENT surgeon Dr. Rajavel
                </p>
            </div>

            <div className="h-[290px] w-[413px] rounded-xl p-5 drop-shadow-xl bg-white flex flex-col gap-[20px]">
                {/* dp and name and stars */}
                <div className="flex flex-row gap-[10px]">
                    <Image src={vidya} alt="" height={50} width={50}></Image>
                    <div>
                        <p className="text-dark_text_blue font-medium text-[16px] leading-[155%] tracking-[0.48px]">Vidya</p>
                        <Image src={stars} alt="stars" height={80} width={80} ></Image>
                    </div>

                </div>
                <p className="w-[356px] text-[16px]">
                Velammal Hospital has saved the life of a 1-year-old girl from Bangalore. Referred with breathing difficulties, experts at our ENT department swiftly diagnosed a groundnut blocking her airway. Thanks to the expertise of ENT surgeon Dr. Rajavel
                </p>
            </div>

            <div className="h-[290px] w-[413px] rounded-xl p-5 drop-shadow-xl bg-white flex flex-col gap-[20px]">
                {/* dp and name and stars */}
                <div className="flex flex-row gap-[10px]">
                    <Image src={vidya} alt="" height={50} width={50}></Image>
                    <div>
                        <p className="text-dark_text_blue font-medium text-[16px] leading-[155%] tracking-[0.48px]">Vidya</p>
                        <Image src={stars} alt="stars" height={80} width={80} ></Image>
                    </div>

                </div>
                <p className="w-[356px] text-[16px]">
                Velammal Hospital has saved the life of a 1-year-old girl from Bangalore. Referred with breathing difficulties, experts at our ENT department swiftly diagnosed a groundnut blocking her airway. Thanks to the expertise of ENT surgeon Dr. Rajavel
                </p>
            </div>

            <div className="h-[290px] w-[413px] rounded-xl p-5 drop-shadow-xl bg-white flex flex-col gap-[20px]">
                {/* dp and name and stars */}
                <div className="flex flex-row gap-[10px]">
                    <Image src={vidya} alt="" height={50} width={50}></Image>
                    <div>
                        <p className="text-dark_text_blue font-medium text-[16px] leading-[155%] tracking-[0.48px]">Vidya</p>
                        <Image src={stars} alt="stars" height={80} width={80} ></Image>
                    </div>

                </div>
                <p className="w-[356px] text-[16px]">
                Velammal Hospital has saved the life of a 1-year-old girl from Bangalore. Referred with breathing difficulties, experts at our ENT department swiftly diagnosed a groundnut blocking her airway. Thanks to the expertise of ENT surgeon Dr. Rajavel
                </p>
            </div>
        </div>

        {/* buttons */}
        <div className="flex flex-row gap-[20px]">
            <button>
                <Image src={left} alt="left" height={60} width={60} className="bg-white border-4 border-primary_blue rounded-full"></Image>
            </button>
            <button>
                <Image src={right} alt="left" height={60} width={60} className="bg-white border-4 border-primary_blue rounded-full"></Image>
            </button>
        </div>
    </div>
  )
}

export default Testimonials