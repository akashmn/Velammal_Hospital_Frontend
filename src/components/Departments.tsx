import Image from "next/image"
import icon1 from "@/public/icon1.svg"
import icon2 from "@/public/icon2.svg"
import icon3 from "@/public/icon3.svg"
import icon4 from "@/public/icon3.svg"
import search from "@/public/search_icon.svg"


const Departments = () => {
  return (
    <div className="bg-secondary_white px-[72px] pb-[90px] flex flex-col items-center justify-center">
        {/* Heading and body */}
        <div className="mt-[230px] flex flex-row items-center justify-center h-[212px] w-[1170px]">
            <div className="w-[150px] h-full">
                <Image src={icon1} alt="icon1" /> 
                <Image src={icon2} alt="icon2" />
            </div>
            <div className="h-full w-[824px] flex flex-col items-center justify-center text-center font-semibold">
                <p className="text-[56px] text-dark_text_blue">Discover Our Premier Centers of Medical Excellence</p>
                <p className="text-[14px] text-body_text_white">Delivering world-class medical care through compassion, innovation, and an unwavering commitment to improving lives. Explore all our healthcare services and experience the Velammal difference</p>
            </div>
            <div className="w-[150px] h-full flex flex-col">
                <Image src={icon3} alt="icon3"/>
                <Image src={icon4} alt="icon4"/>
            </div>
        </div>
        {/* Search bar */}
        <div className="mt-[100px] flex flex-row items-center justify-center gap-5">
            <input type="text" placeholder="Search departments" className="w-[400px] h-[56px] border-4 border-primary_blue rounded-full p-[32px]"/>
            <Image src={search} alt="seach icon" height={24} width={24} className="-ml-20"></Image>
        </div>
    </div>
  )
}

export default Departments