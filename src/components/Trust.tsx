import Image from "next/image";
import underline from "@/public/hero_underline.png";

const Trust: React.FC = () => {
  return (
    <div className="h-auto w-full py-[72px] flex flex-col items-center">
        <div className="flex flex-col h-[70px] w-[1021px] items-center justify-center">
            <p className=" text-dark_text_blue text-center font-[600] text-[56px] leading-none">51 Lakh+ Patients Trust Us</p>
            <Image src={underline} alt="underline"></Image>
        </div>
    </div>
  );
};

export default Trust;