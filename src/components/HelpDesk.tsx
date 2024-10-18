import Image from 'next/image'
import underline from '@/public/helpdesk_underline.svg'
import trust_image from '@/public/trust_image.svg'
import online_consultation from '@/public/online_consultation.svg'

import calling_icon from "@/public/Calling.png"

const HelpDesk = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[80px] py-[130px] h-auto w-full bg-secondary_white gap-[40px]">
        {/* heading, underline */}
        <div className='flex flex-col items-center justify-center'>
            <p className="text-dark_text_blue text-center font-[600] text-[56px] leading-[67.2px] tracking-[-1.12px] capitalize">International Patient Care</p>
            <Image src={underline} alt="underline" className='-mt-2'></Image>
        </div>
        <p className='w-[732px] text-body_text_white text-center text-20px font-medium leading-155 tracking-[0.3px]'>Access world-class doctors and specialists across a wide range of medical fields, all under one roof at fraction of the cost.</p>

        {/* Image, cards and body & button */}

        <div className='flex flex-row items-center justify-around gap-[40px]'>
            {/* image */}
            <Image src={trust_image} alt='trust_image' className='w-[425px] h-[413px]'></Image>
            {/* cards */}
            <div className='grid grid-cols-2 gap-[20px]'>
                <div className="h-[118.55px] w-[144px] bg-white px-[23px] flex-col flex items-center justify-center gap-1 text-center rounded-xl hover:drop-shadow-2xl duration-300">
                    <Image src={online_consultation} alt="breast_endocrine" height={40} width={40} className="bg-primary_blue p-2 rounded-full"></Image>
                    <p className="text-[16px] font-semibold">Online Consulation</p>
                </div>
                <div className="h-[118.55px] w-[144px] bg-white px-[23px] flex-col flex items-center justify-center gap-1 text-center rounded-xl hover:drop-shadow-2xl duration-300">
                    <Image src={online_consultation} alt="breast_endocrine" height={40} width={40} className="bg-primary_blue p-2 rounded-full"></Image>
                    <p className="text-[16px] font-semibold">Online Consulation</p>
                </div>
                <div className="h-[118.55px] w-[144px] bg-white px-[23px] flex-col flex items-center justify-center gap-1 text-center rounded-xl hover:drop-shadow-2xl duration-300">
                    <Image src={online_consultation} alt="breast_endocrine" height={40} width={40} className="bg-primary_blue p-2 rounded-full"></Image>
                    <p className="text-[16px] font-semibold">Online Consulation</p>
                </div>
                <div className="h-[118.55px] w-[144px] bg-white px-[23px] flex-col flex items-center justify-center gap-1 text-center rounded-xl hover:drop-shadow-2xl duration-300">
                    <Image src={online_consultation} alt="breast_endocrine" height={40} width={40} className="bg-primary_blue p-2 rounded-full"></Image>
                    <p className="text-[16px] font-semibold">Online Consulation</p>
                </div>
                <div className="h-[118.55px] w-[144px] bg-white px-[23px] flex-col flex items-center justify-center gap-1 text-center rounded-xl hover:drop-shadow-2xl duration-300">
                    <Image src={online_consultation} alt="breast_endocrine" height={40} width={40} className="bg-primary_blue p-2 rounded-full"></Image>
                    <p className="text-[16px] font-semibold">Online Consulation</p>
                </div>
                <div className="h-[118.55px] w-[144px] bg-white px-[23px] flex-col flex items-center justify-center gap-1 text-center rounded-xl hover:drop-shadow-2xl duration-300">
                    <Image src={online_consultation} alt="breast_endocrine" height={40} width={40} className="bg-primary_blue p-2 rounded-full"></Image>
                    <p className="text-[16px] font-semibold">Online Consulation</p>
                </div>
            </div>

            {/* body and button */}
            <div className="w-[296px] flex flex-col items-center justify-center gap-[40px]">
                <div className='flex flex-col items-center justify-center gap-[11px]'>
                    <p className='text-dark_text_blue text-[22px] font-semibold leading-[32px]'>Start Your Personalised Medical Treatment Journey</p>
                    <p className="text-body_text_white text-[16px] text-left font-normal">Velammal Hospital offers comprehensive, personalised medical services to international patients, ensuring you receive exceptional care offering support throughout, from travel arrangements to post-treatment care. Our dedicated international patient care team is here to provide support and guidance throughout your healthcare journey.</p>
                </div>
                <button className="w-[300px] h-[60px] py-[12px] px-[20px] bg-primary_blue flex flex-row items-center justify-evenly rounded-full gap-[15px]">
                    <p className="text-[14px] text-white font-semibold">International help Desk</p>
                    <Image src={calling_icon} alt="arrow up right" className='bg-white rounded-full p-1'></Image>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HelpDesk