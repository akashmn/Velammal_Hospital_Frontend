import Image from "next/image"

import health from "@/public/icon1.svg"
import accessibility from "@/public/icon2.svg"
import services from "@/public/icon3.svg"
import checkup from "@/public/icon4.svg"

import search from "@/public/search_icon.svg"

import departments from "@/json/Departments"

const Departments = () => {
  return (
    <div className="bg-secondary_white md:px-[72px] px-[20px] pb-[90px] flex flex-col items-center justify-center md:gap-[80px] gap-[40px]">
        {/* Heading and body */}
        <div className="md:mt-[230px] mt-[100px] flex flex-col md:flex-row items-center justify-center h-auto md:h-[212px] w-full md:w-[1170px]">
            <div className="w-[100px] md:w-[150px] flex flex-col gap-[50px] md:gap-[100px] h-full">
                <Image src={health} alt="icon1" className="md:-ml-[100px] max-sm:hidden"/> 
                <Image src={accessibility} alt="icon2" className="md:-mb-[100px] -mt-[30px] ml-4 max-sm:hidden"/>
            </div>
            <div className="h-full md:w-[824px] w-full md:gap-[40px] gap-[20px] flex flex-col items-center justify-center text-center font-semibold">
                <p className="md:text-[56px] text-[25px] w-full md:font-semibold font-bold md:leading-[61.6px] leading-[40px] capitalize text-center text-dark_text_blue">Discover Our Premier Centers of Medical Excellence</p>
                <p className="md:text-[20px] text-[16px] w-full font-medium md:leading-[24px] leading-[20px] capitalize md:text-center text-justify text-body_text_white">Delivering world-class medical care through compassion, innovation, and an unwavering commitment to improving lives. Explore all our healthcare services and experience the Velammal difference</p>
            </div>
            <div className="w-[100px] md:w-[150px] h-full flex flex-col md:gap-[100px] gap-[50px]">
                <Image src={checkup} alt="icon3" className="md:ml-[100px] hidden md:block max-sm:hidden"/>
                <Image src={services} alt="icon4" className="md:-mb-[100px] -mt-[30px] ml-4 max-sm:hidden"/>
            </div>
        </div>

        {/* Search bar */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-5">
            <input type="text" placeholder="Search departments" className="md:w-[400px] w-[100%] md:h-[56px] h-[40px] border-2 md:border-4 border-primary_blue rounded-full p-[10px] md:p-[20px]"/>
            <Image src={search} alt="search icon" height={24} width={24} className="md:-ml-20 -ml-1"></Image>
        </div>

        {/* Department cards */}
        <div className="w-full md:w-[1440px] grid grid-cols-2 md:grid-cols-6 gap-[20px] md:gap-[40px] px-[20px] md:px-[200px]">
        {departments.map((department, index) => (
          <div
            key={index}
            className="h-[100px] md:h-[118.55px] w-full md:w-[144px] bg-white flex flex-col items-center justify-center gap-2 text-center rounded-xl hover:drop-shadow-2xl duration-300"
          >
            <Image
              src={department.icon}
              alt={department.name}
              className="bg-primary_blue h-[30px] w-[30px] p-2 rounded-full"
            />
            <p className="text-[12px] md:text-[14px] font-semibold">{department.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments
