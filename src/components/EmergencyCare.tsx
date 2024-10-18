import Image from 'next/image'
import icon from "@/public/24_7.svg"

import calling_icon from "@/public/emergency_caller.svg"
import ambulance from "@/public/ambulance.svg"

const EmergencyCare = () => {
  return (
    <div className='bg-dark_text_blue w-full h-[900px]'>
        {/* Emergency body and icons and button */}

        {/* heading and body */}
        <div className='w-1/2 py-[100px] pl-[71.35px] '>
            {/* heading */}
            <div className='flex flex-col gap-[50px]'>
                {/* icon and main heading */}
                <div className='flex flex-row gap-[15px]'>
                    <Image src={icon} alt='icon'></Image>
                    <p className='text-white text-[56px] font-semibold capitalize leading-[128px]'>critical care</p>
                </div>
                <p className='text-white text-[40px] font-semibold capitalize leading-[128px]'>When Every Second Counts </p>
            </div>

            {/* subheading and body */}
            <div className='w-[543px] flex flex-col gap-[15px]'>
                <p className='text-white text-[24px] font-semibold leading-[37.2px] tracking-[0.36px] capitalize'>Velammal’s commitment to saving lives never rests </p>
                <p className='text-body_text_white text-[20px] font-normal leading-[31px] tracking-[0.3px] capitalize'>Our 24/7 Critical Care services provide round-the-clock access to advanced life-saving technology and expert medical professionals, ensuring that patients in urgent need receive immediate attention and the highest standard of care.</p>
            </div>

            {/*icons & button */}
            <div className='mt-[20px] flex flex-col items-center justify-center gap-[50px]'>
                {/* icons */}
                <div className='flex flex-row gap-[117px] items-center justify-center'>
                    {/* individual icons */}
                    <div className='flex flex-col gap-[8px] items-center'>
                        <Image src={ambulance} alt='ambulance' height={46} width={46} className='bg-highlight_yellow rounded-full p-2'></Image>
                        <p className='text-white text-[14] text-center font-medium leading-[23px] capitalize'>Free Ambulance</p>
                    </div>

                    <div className='flex flex-col gap-[8px] items-center'>
                        <Image src={ambulance} alt='ambulance' height={46} width={46} className='bg-highlight_yellow rounded-full p-2'></Image>
                        <p className='text-white text-[16px] text-center font-medium leading-[23px] capitalize'>Free Ambulance</p>
                    </div>

                    <div className='flex flex-col gap-[8px] items-center'>
                        <Image src={ambulance} alt='ambulance' height={46} width={46} className='bg-highlight_yellow rounded-full p-2'></Image>
                        <p className='text-white text-[16px] text-center font-medium leading-[23px] capitalize'>Free Ambulance</p>
                    </div>
                </div>
                    
                {/* button */}
                <button className="w-[auto] h-[60px] py-[12px] px-[20px] bg-highlight_yellow flex flex-row items-center justify-evenly rounded-full gap-[15px]">
                    <p className="text-white text-[20px] font-semibold leading-[31px] tracking-[0.3px] capitalize">Call Now For 24x7 Emergency Care</p>
                    <Image src={calling_icon} alt="arrow up right" className='bg-white rounded-full text-highlight_yellow p-1'></Image>
                </button>
            </div>
        </div>


        {/* carousel */}
        <div className="w-1/2">
            
        </div>
    </div>
  )
}

export default EmergencyCare