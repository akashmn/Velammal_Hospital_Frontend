import Image from "next/image"

import health from "@/public/icon1.svg"
import accessibility from "@/public/icon2.svg"
import services from "@/public/icon3.svg"
import checkup from "@/public/icon4.svg"

import search from "@/public/search_icon.svg"

import departments from "@/json/Departments"

const Departments = () => {
  return (
    <div className="bg-secondary_white flex flex-col items-center justify-center md:gap-[80px] gap-[40px] overflow-hidden">
      {/* Heading and body */}
      <div className="p-3 md:mt-[150px] mt-[100px] relative flex flex-col md:flex-row items-center justify-center h-auto md:h-[212px] w-full lg:w-[1170px]">
        <div className="absolute top-4 left-0 hidden lg:block">
          <Image src={health} alt="icon1" className="absolute left-20" />
          <Image src={accessibility} alt="icon2" className="mt-16" />
        </div>
        <div className="h-full lg:w-[824px] w-full md:gap-[40px] gap-[20px] flex flex-col items-center justify-center text-center ">
          <p className="md:text-[53px] text-[25px] w-full font-Semibold md:leading-[61.6px] leading-[40px] capitalize text-center text-dark_text_blue">
            Discover Our Premier Centers of Medical Excellence
          </p>
          <p className="md:text-[18px] text-[16px] w-full lg:w-[900px] font-Medium md:leading-[24px] leading-[20px] capitalize md:text-center text-justify text-body_text_grey">
            Delivering world-class medical care through compassion, innovation, and an unwavering commitment to improving lives. Explore all our healthcare services and experience the Velammal difference
          </p>
        </div>
        <div className="absolute top-4 right-0 hidden lg:block">
          <Image src={services} alt="icon1" className="absolute right-20" />
          <Image src={checkup} alt="icon4" className="mt-16" />
        </div>
      </div>

      {/* Search bar */}
      <div className="flex flex-row items-center justify-center gap-4 md:gap-5">
        <input type="text" placeholder="Search departments" className="md:w-[400px] w-[100%] md:h-[56px] h-[40px] border-2 md:border-4 border-primary_blue rounded-full p-[10px] md:p-[20px] focus:outline-none focus:ring-0 text-[16px] font-[300] font-Medium capitalize" />
        <Image src={search} alt="search icon" height={24} width={24} className="md:-ml-20 -ml-1"></Image>
      </div>

      {/* Department cards */}
      <div className="w-full lg:w-[1200px] mx-auto p-3 grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 place-items-center gap-10 overflow-hidden">
        {departments.map((department, index) => (
          <div
            key={index}
            className="h-[100px] md:h-[118.55px] w-full md:w-[144px] bg-white flex flex-col items-center justify-center gap-2 text-center rounded-xl hover:drop-shadow-2xl duration-300 p-2"
          >
            <Image
              src={department.icon}
              alt={department.name}
              className="bg-primary_blue h-[46px] w-[46px] p-2 rounded-full"
            />
            <p className="text-[12px] md:text-[14px] font-[400] font-Medium text-wrap">{department.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments
