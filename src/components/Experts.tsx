import Image from "next/image";
import underline from "@/public/experts_underline.svg";
import search from "@/public/search_icon.svg";

import bg from "@/public/experts_cards_bg.svg"
import ramprasath from "@/public/experts_cards_dr_ramprasath.svg"
import arrow from "@/public/experts_cards_arrow.svg"

import left from "@/public/testimonial_left_arrow.svg"
import right from "@/public/testimonial_right_arrow.svg"

const Experts = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-[20px] md:px-[50px] pb-[50px]">
      <div className="flex flex-col items-center justify-center md:w-[1053px] w-full gap-[15px] md:gap-[25px]">
        {/* Heading and underline */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-dark_text_blue text-center font-[600] md:text-[50px] text-[32px] md:leading-[70px] leading-[45px] capitalize md:px-[80px] px-[20px] py-[40px] md:py-[84px]">
            Meet the experts behind your care
          </p>
          <Image
            src={underline}
            alt="underline"
            className="-mt-[40px] md:-mt-[90px]"
          />
        </div>

        {/* Subheading */}
        <p className="text-body_text_white md:text-center text-justify font-[500] md:text-[20px] text-[16px] md:leading-[31px] leading-[24px] tracking-[0.3px] font-general-sans px-2 md:px-0">
          At Velammal Hospital, our team of 450+ highly skilled doctors is
          dedicated to providing the best medical care across various
          specialties. Every doctor brings a wealth of experience, compassion,
          and expertise to ensure your health is in the best hands.
        </p>
      </div>

      {/* Search doctors and places tab */}
      <div className="flex flex-col items-center justify-center gap-[25px] mt-[50px] md:mt-[100px] w-full">
        {/* Search bar */}
        <div className="flex flex-row items-center justify-center gap-5">
          <input
            type="text"
            placeholder="Search Doctors"
            className="w-[300px] md:w-[400px] h-[50px] md:h-[56px] border-4 border-primary_blue rounded-full p-[20px] md:p-[32px]"
          />
          <Image
            src={search}
            alt="search icon"
            height={24}
            width={24}
            className="-ml-14 md:-ml-20"
          />
        </div>

        {/* Places tabs */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-[55px]">
          <button className="h-auto w-[120px] md:w-[146px] flex px-[20px] py-[10px] md:px-[30px] md:py-[12px] justify-center items-center gap-[10px] bg-primary_blue text-white rounded-full">
            Madurai
          </button>
          <button className="h-auto w-[120px] md:w-[146px] flex px-[20px] py-[10px] md:px-[30px] md:py-[12px] justify-center items-center gap-[10px] bg-primary_blue text-white rounded-full">
            Chennai
          </button>
        </div>
      </div>

      {/* Doctors slider and button */}
      <div className="flex flex-col items-center justify-center gap-[50px] mt-[66px]">
        {/* doctors cards */}
        <div className="h-auto w-full flex flex-row gap-[50px] pl-[400px]">
          {/* individual cards */}
            <div 
                className="bg-cover bg-center h-auto w-[281px] flex flex-col items-start justify-center rounded-xl"
                style={{ backgroundImage: `url(${bg.src})` }}>
                {/* doctor image */}
                <Image src={ramprasath} alt="ramprasath" className="h-[284px] w-[264px] mt-3"></Image>
                {/* doctor name and specialization */}
                <div className="-mt-[40px] flex w-[273px] h-[90px] p-[12px_20px] justify-between items-center flex-shrink-0 rounded-[10px] bg-gradient-to-r from-[rgba(37,180,248,0.30)] to-[rgba(37,180,248,0)] backdrop-blur-[81.85px]">
                    <div className="flex flex-col">
                        <p className="text-[18px] font-bold leading-[120%] capitalize text-dark_text_blue">Dr. Ramprassath</p>
                        <p className="text-[14px] leading-[120%] capitalize text-black">Senior Consultant</p>
                        <p className="text-[14px] leading-[120%] capitalize text-black">Cardiothoracic Surgeon</p>
                    </div>
                    <button>
                        <Image src={arrow} alt="arrow"></Image>
                    </button>
                </div>
            </div>

        <div 
            className="bg-cover bg-center h-auto w-[281px] flex flex-col items-start justify-center rounded-xl"
            style={{ backgroundImage: `url(${bg.src})` }}>
            {/* doctor image */}
            <Image src={ramprasath} alt="ramprasath" className="h-[284px] w-[264px] mt-3"></Image>
            {/* doctor name and specialization */}
            <div className="-mt-[40px] flex w-[273px] h-[90px] p-[12px_20px] justify-between items-center flex-shrink-0 rounded-[10px] bg-gradient-to-r from-[rgba(37,180,248,0.30)] to-[rgba(37,180,248,0)] backdrop-blur-[81.85px]">
                <div className="flex flex-col">
                    <p className="text-[18px] font-bold leading-[120%] capitalize text-dark_text_blue">Dr. Ramprassath</p>
                    <p className="text-[14px] leading-[120%] capitalize text-black">Senior Consultant</p>
                    <p className="text-[14px] leading-[120%] capitalize text-black">Cardiothoracic Surgeon</p>
                </div>
                <button>
                    <Image src={arrow} alt="arrow"></Image>
                </button>
            </div>
        </div>

        <div 
            className="bg-cover bg-center h-auto w-[281px] flex flex-col items-start justify-center rounded-xl"
            style={{ backgroundImage: `url(${bg.src})` }}>
            {/* doctor image */}
            <Image src={ramprasath} alt="ramprasath" className="h-[284px] w-[264px] mt-3"></Image>
            {/* doctor name and specialization */}
            <div className="-mt-[40px] flex w-[273px] h-[90px] p-[12px_20px] justify-between items-center flex-shrink-0 rounded-[10px] bg-gradient-to-r from-[rgba(37,180,248,0.30)] to-[rgba(37,180,248,0)] backdrop-blur-[81.85px]">
                <div className="flex flex-col">
                    <p className="text-[18px] font-bold leading-[120%] capitalize text-dark_text_blue">Dr. Ramprassath</p>
                    <p className="text-[14px] leading-[120%] capitalize text-black">Senior Consultant</p>
                    <p className="text-[14px] leading-[120%] capitalize text-black">Cardiothoracic Surgeon</p>
                </div>
                <button>
                    <Image src={arrow} alt="arrow"></Image>
                </button>
            </div>
        </div>

        <div 
            className="bg-cover bg-center h-auto w-[281px] flex flex-col items-start justify-center rounded-xl"
            style={{ backgroundImage: `url(${bg.src})` }}>
            {/* doctor image */}
            <Image src={ramprasath} alt="ramprasath" className="h-[284px] w-[264px] mt-3"></Image>
            {/* doctor name and specialization */}
            <div className="-mt-[40px] flex w-[273px] h-[90px] p-[12px_20px] justify-between items-center flex-shrink-0 rounded-[10px] bg-gradient-to-r from-[rgba(37,180,248,0.30)] to-[rgba(37,180,248,0)] backdrop-blur-[81.85px]">
                <div className="flex flex-col">
                    <p className="text-[18px] font-bold leading-[120%] capitalize text-dark_text_blue">Dr. Ramprassath</p>
                    <p className="text-[14px] leading-[120%] capitalize text-black">Senior Consultant</p>
                    <p className="text-[14px] leading-[120%] capitalize text-black">Cardiothoracic Surgeon</p>
                </div>
                <button>
                    <Image src={arrow} alt="arrow"></Image>
                </button>
            </div>
        </div>

        <div 
            className="bg-cover bg-center h-auto w-[281px] flex flex-col items-start justify-center rounded-xl"
            style={{ backgroundImage: `url(${bg.src})` }}>
            {/* doctor image */}
            <Image src={ramprasath} alt="ramprasath" className="h-[284px] w-[264px] mt-3"></Image>
            {/* doctor name and specialization */}
            <div className="-mt-[40px] flex w-[273px] h-[90px] p-[12px_20px] justify-between items-center flex-shrink-0 rounded-[10px] bg-gradient-to-r from-[rgba(37,180,248,0.30)] to-[rgba(37,180,248,0)] backdrop-blur-[81.85px]">
                <div className="flex flex-col">
                    <p className="text-[18px] font-bold leading-[120%] capitalize text-dark_text_blue">Dr. Ramprassath</p>
                    <p className="text-[14px] leading-[120%] capitalize text-black">Senior Consultant</p>
                    <p className="text-[14px] leading-[120%] capitalize text-black">Cardiothoracic Surgeon</p>
                </div>
                <button>
                    <Image src={arrow} alt="arrow"></Image>
                </button>
            </div>
        </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-[20px]">
            <button>
                <Image src={left} alt="left" height={60} width={60} className="bg-white border-4 border-primary_blue rounded-full"></Image>
            </button>
            <button>
                <Image src={right} alt="left" height={60} width={60} className="bg-white border-4 border-primary_blue rounded-full"></Image>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
