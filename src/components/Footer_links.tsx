import Image from "next/image"
import image from "@/public/footer_image.svg"



const Footer_links = () => {
  return (
    <div className="h-[94rem] w-full bg-dark_text_blue pt-[100px] pl-[80px]">
        {/* heading, body and image */}
        <div className="flex flex-row items-center justify-between pr-[180px]">
            {/* heading and body text */}
            <div className="flex flex-col gap-[23px]">
                <p className="text-white text-[56px] font-bold leading-[125%] uppercase">Always Ready, Always Here.</p>
                <p className="w-auto h-auto text-white text-[32px] font-semibold leading-[125%] normal-case">We Treat You Like Family</p>
                <p className="h-auto w-[504px] text-white text-[18px] font-medium leading-[27px] tracking-[0.27px] normal-case">Your well-being is our responsibility. Whether it’s a routine checkup or critical emergency care, we stand by you with advanced medical expertise and a personal touch that makes all the difference.</p>
            </div>

            {/* image */}
            <Image src={image} alt="image" className="h-[268px] w-[280px]"></Image>
        </div>
    </div>
  )
}

export default Footer_links