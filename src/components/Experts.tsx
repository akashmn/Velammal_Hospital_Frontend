import Image from "next/image"
import underline from "@/public/experts_underline.svg"
import search from "@/public/search_icon.svg"


const Experts = () => {
  return (
    <div className="mt-[100px] flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center w-[1053px] gap-[25px]">
            <div className="flex flex-col items-center justify-center">
                <p className="text-dark_text_blue text-center font-[600] text-[50px] leading-[70px] capitalize px-[80px] py-[84px]">Meet the experts behind your care</p>
                <Image src={underline} alt="underline" className="-mt-[90px]"></Image>
            </div>
            <p className="text-body_text_white text-center font-[500] text-[20px] leading-[31px] tracking-[0.3px] font-general-sans">
                At Velammal Hospital, our team of 450+ highly skilled doctors is dedicated to providing the best medical care across  various specialties. Every doctor brings a wealth of experience, compassion, and expertise to ensure your health is in the best hands.
            </p>
        </div>

        {/* search doctors and places tab */}
        <div className="flex flex-col items-center justify-center gap-[25px]">
            {/* search doctors */}
            <div className="mt-[100px] flex flex-row items-center justify-center gap-5">
                <input type="text" placeholder="Search Doctors" className="w-[400px] h-[56px] border-4 border-primary_blue rounded-full p-[32px]"/>
                <Image src={search} alt="seach icon" height={24} width={24} className="-ml-20"></Image>
            </div>
            
            {/* places tabs */}
            <div className="flex flex-row items-center justify-center gap-[55px]">
                <button className="h-auto w-[146px] flex px-[30px] py-[12px] justify-center items-center gap-[10px] bg-primary_blue text-white rounded-full">Madurai</button>
                <button className="h-auto w-[146px] flex px-[30px] py-[12px] justify-center items-center gap-[10px] bg-primary_blue text-white rounded-full">Chennai</button>
            </div>
        </div>
    </div>
  )
}

export default Experts