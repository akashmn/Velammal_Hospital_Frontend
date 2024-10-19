import Image from 'next/image'
import underline from '@/public/helpdesk_underline.svg'
import trust_image from '@/public/trust_image.svg'
import online_consultation from '@/public/online_consultation.svg'
import calling_icon from "@/public/Calling.png"

const HelpDesk = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[20px] md:px-[80px] py-[50px] md:py-[130px] h-auto w-full bg-secondary_white gap-[40px]">
        {/* heading, underline */}
        <div className='flex flex-col items-center justify-center'>
            <p className="text-dark_text_blue text-center font-[600] text-[32px] md:text-[56px] leading-[40px] md:leading-[67.2px] tracking-[-1.12px] capitalize">
                International Patient Care
            </p>
            <Image src={underline} alt="underline" className='md:-mt-2  max-sm:w-[200px]'></Image>
        </div>
        
        <p className='md:w-[732px] w-full text-body_text_white text-center text-[16px] md:text-[20px] font-medium leading-[22px] md:leading-[155%] tracking-[0.3px]'>
            Access world-class doctors and specialists across a wide range of medical fields, all under one roof at a fraction of the cost.
        </p>

        {/* Image, cards and body & button */}
        <div className='flex flex-col md:flex-row items-center justify-around gap-[40px]'>
            {/* image */}
            <Image src={trust_image} alt='trust_image' className='w-full max-w-[425px] h-auto'></Image>

            {/* cards */}
            <div className='grid grid-cols-2 md:grid-cols-2 gap-[20px]'>
                {Array(6).fill(0).map((_, idx) => (
                    <div key={idx} className="h-[118.55px] w-[144px] bg-white px-[23px] flex flex-col items-center justify-center gap-1 text-center rounded-xl hover:drop-shadow-2xl duration-300">
                        <Image src={online_consultation} alt="online_consultation" height={40} width={40} className="bg-primary_blue p-2 rounded-full" />
                        <p className="text-[16px] font-semibold">Online Consultation</p>
                    </div>
                ))}
            </div>

            {/* body and button */}
            <div className="w-full max-w-[296px] flex flex-col items-center justify-center gap-[20px] md:gap-[40px]">
                <div className='flex flex-col items-center justify-center gap-[11px] text-center'>
                    <p className='text-dark_text_blue text-[20px] md:text-[22px] text-start font-semibold leading-[28px] md:leading-[32px]'>
                        Start Your Personalised Medical Treatment Journey
                    </p>
                    <p className="text-body_text_white text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-left">
                        Velammal Hospital offers comprehensive, personalised medical services to international patients, ensuring you receive exceptional care throughout. Our dedicated team supports you from travel arrangements to post-treatment care.
                    </p>
                </div>
                <button className="w-full max-w-[300px] h-[50px] md:h-[60px] py-[12px] px-[20px] bg-primary_blue flex flex-row items-center justify-evenly rounded-full gap-[15px]">
                    <p className="text-[14px] text-white font-semibold">International Help Desk</p>
                    <Image src={calling_icon} alt="call icon" className='bg-white rounded-full p-1' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default HelpDesk;
