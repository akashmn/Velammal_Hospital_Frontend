import Image from "next/image"

import health from "@/public/icon1.svg"
import accessibility from "@/public/icon2.svg"
import services from "@/public/icon3.svg"
import checkup from "@/public/icon4.svg"

import search from "@/public/search_icon.svg"

import departments from "@/json/Departments"

const Departments = () => {
  return (
    <div className="bg-secondary_white md:px-[72px] pb-[90px] flex flex-col items-center justify-center md:gap-[80px] gap-[40px]">
        {/* Heading and body */}
        <div className="md:mt-[230px] mt-[100px] flex flex-row items-center justify-center h-[212px] md:w-[1170px]">
            <div className="w-[150px] flex flex-col gap-[100px] h-full">
                <Image src={health} alt="icon1" className="md:-ml-[100px]"/> 
                <Image src={accessibility} alt="icon2" className="md:-mb-[100px] -mt-[50px] ml-6"/>
            </div>
            <div className="h-full md:w-[824px] w-[100px] md:gap-[40px] gap-[20px] flex flex-col items-center justify-center text-center font-semibold">
                <p className="md:text-[56px] text-[25px] w-[300px] md:w-[824px] md:font-semibold font-bold  md:leading-[61.6px] leading-[40px] capitalize text-center text-dark_text_blue">Discover Our Premier Centers of Medical Excellence</p>
                <p className="md:text-[20px] text-[16px] w-[330px] md:w-full font-medium md:leading-[24px] leading-[20px] capitalize md:text-center text-justify text-body_text_white">Delivering world-class medical care through compassion, innovation, and an unwavering commitment to improving lives. Explore all our healthcare services and experience the Velammal difference</p>
            </div>
            <div className="w-[150px] h-full flex flex-col md:gap-[100px] gap-[100px]">
                <Image src={checkup} alt="icon3" className="md:ml-[100px] hidden"/>
                <Image src={services} alt="icon4" className="md:-mb-[100px]  -mt-[50px] ml-6"/>
            </div>
        </div>

        {/* Search bar */}
        <div className="flex flex-row items-center justify-center gap-5">
            <input type="text" placeholder="Search departments" className="md:w-[400px] w-[290px] md:h-[56px] h-[20px] md:border-4 border-2 border-primary_blue rounded-full md:p-[32px] p-[20px]"/>
            <Image src={search} alt="seach icon" height={24} width={24} className="md:-ml-20 -ml-16"></Image>
        </div>

        {/* Department cards */}
        <div className="h-auto md:w-[1440px] w-[900px] grid md:grid-cols-6 grid-cols-3 px-72 md:gap-[40px] gap-[20px]">
        {departments.map((department, index) => (
          <div
            key={index}
            className="md:h-[118.55px] md:w-[144px] w-[100px] h-[100px] bg-white px-[23px] flex-col flex items-center justify-center gap-2 text-center rounded-xl hover:drop-shadow-2xl duration-300"
          >
            <Image
              src={department.icon}
              alt={department.name}
              className="bg-primary_blue h-[30px] w-[30px] p-2 rounded-full"
            />
            <p className="md:text-[16px] text-[12px] font-semibold">{department.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments