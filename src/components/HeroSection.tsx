import Image from "next/image";
import hero1 from '@/public/hero_image1.png'
import hero2 from '@/public/hero_image2.png'
import underline from '@/public/hero_underline.png'
import calling from '@/public/Calling.png'
import icon from '@/public/arrow_up_right.png'

import i1 from '@/public/consult_online.png'

const HeroSection: React.FC = () => {
  return (
    <div className="h-auto">
    <div className="z-0 flex flex-col ml-[104px]">
      <div className="z-1 flex flex-row-reverse">
        <Image src={hero2} alt="hero-image"/>
      </div>
      <div className="z-2 -mt-[810px] h-[764px] w-[1146px] flex flex-col gap-[50px] bg-gradient-to-r from-white to-transparent via-[rgba(255,255,255,0.82)]">
        <div className="flex flex-col mt-[100px]">
            <p className="text-[62px] font-semibold leading-[120%] tracking-[-1.24px] text-[#011632] capitalize">Healthcare you can trust</p>
            <Image src={underline} alt="hero_underline" className="ml-[340px]"></Image>
        </div>
        <div className="">
            <p className="text-[40px] font-semibold leading-[155%] tracking-[0.3px]">Your health, our priority</p>
            <p className="mt-[30px] text-[#3C4959] font-medium leading-[155%] tracking-[0.3px]">Experience advanced, compassionate medical services from Tamil <br /> Nadu’s leading multispecialty hospital. Offering 24/7 Expert  Medical <br /> care with a commitment to excellence</p>
            <div className="mt-[30px] flex flex-row gap-10">
                <button className="w-auto h-[60px] py-[12px] px-[20px] bg-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px]">
                    <p className="text-[14px] text-white font-semibold">Book an appointment</p>
                    <Image src={icon} alt="arrow up right"></Image>
                </button>
                <div className="flex flex-row items-center justify-center gap-10">
                    <Image src={calling} alt="caller-image" className="h-[55px] w-[55px] rounded-full bg-green-700 border p-[15px] border-primary_blue"></Image>
                    <div>
                        <p className="text-[14px] text-primary_blue font-semibold">24H Emergency</p>
                        <p className="text-[14px] font-semibold">(0452) 711 3333</p>
                    </div>
                </div>
          </div>
        </div>
      </div>
        </div>

        {/* hero cards */}
        <div className="z-10 -mt-[175px] w-[1270px] h-[172px] flex flex-row items-center gap-[10px] justify-center">
            <div className="w-[200px] h-full flex flex-col justify-center items-center bg-white py-[40px] px-[10px] gap-5 rounded-lg drop-shadow-2xl">
                <Image src={i1} alt="consult_online" height={45} width={45} className="border bg-secondary_blue rounded-full p-2"/>
                <p className="text-[14px] font-semibold">Consult Online</p>
            </div>
            <div className="w-[200px] h-full flex flex-col justify-center items-center bg-white py-[40px] px-[10px] gap-5 rounded-lg drop-shadow-2xl">
                <Image src={i1} alt="consult_online" height={45} width={45} className="border bg-secondary_blue rounded-full p-2"/>
                <p className="text-[14px] font-semibold">Consult Online</p>
            </div>
            <div className="w-[200px] h-full flex flex-col justify-center items-center bg-white py-[40px] px-[10px] gap-5 rounded-lg drop-shadow-2xl">
                <Image src={i1} alt="consult_online" height={45} width={45} className="border bg-secondary_blue rounded-full p-2"/>
                <p className="text-[14px] font-semibold">Consult Online</p>
            </div>
            <div className="w-[200px] h-full flex flex-col justify-center items-center bg-white py-[40px] px-[10px] gap-5 rounded-lg drop-shadow-2xl">
                <Image src={i1} alt="consult_online" height={45} width={45} className="border bg-secondary_blue rounded-full p-2"/>
                <p className="text-[14px] font-semibold">Consult Online</p>
            </div>
            <div className="w-[200px] h-full flex flex-col justify-center items-center bg-white py-[40px] px-[10px] gap-5 rounded-lg drop-shadow-2xl">
                <Image src={i1} alt="consult_online" height={45} width={45} className="border bg-secondary_blue rounded-full p-2"/>
                <p className="text-[14px] font-semibold">Consult Online</p>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;