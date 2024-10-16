import Image from "next/image";
import hero1 from '@/public/hero_image1.png'
import hero2 from '@/public/hero_image2.png'
import underline from '@/public/hero_underline.png'
import calling from '@/public/Calling.png'
import icon from '@/public/arrow_up_right.png'

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col ml-[104px]">
      <div className="z-0 flex flex-row-reverse">
        <Image src={hero2} alt="hero-image"/>
      </div>
      <div className="z-10 -mt-[700px] h-auto w-[1146px] flex flex-col gap-[50px]">
        <p className="text-[62px] font-semibold leading-[120%] tracking-[-1.24px] text-[#011632] capitalize">Healthcare you can trust</p>
        <div>
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
  );
};

export default HeroSection;