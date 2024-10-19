import Image from 'next/image'
import icon from '@/public/arrow_up_right.png'
import underline from '@/public/hero_underline.png'
import network_image from '@/public/network_velammal_image.svg'

const Network = () => {
  return (
    <div className='bg-secondary_white h-auto w-full px-[80px] py-[82px] flex flex-col items-center justify-center gap-[87px]'>
        <div className='flex flex-col items-center justify-center md:gap-[80px] gap-[25px]'>
            {/* heading & underline */}
            <div className='flex flex-col items-center justify-center md:w-[1290px] w-[410px] px-7 md:gap-5 gap-1'>
                <p className='text-[#011632] text-center md:font-[600] font-bold md:text-[56px] text-[32px] md:leading-[21px]" style="leading-trim: both; text-edge: cap;"'>Velammal Healthcare Network</p>
                <Image src={underline} alt='underline' className='h-[5px] w-[200px]'></Image>
            </div>

            {/* subheading & body */}
            <div className='flex flex-col items-center justify-center w-[1290px] gap-5'>
                <p className='text-dark_text_blue text-center font-[600] md:text-[32px] text-[15px] leading-[38.4px]'>Compassionate care for a healthier tomorrow</p>
                <p className='text-body_text_white md:text-center text-justify font-[500] md:text-[20px] text-[15px] md:w-auto w-[450px] md:leading-[26px] leading-[20px] px-[60px]'>Delivering world-class medical care through compassion, innovation, and an unwavering commitment to improving lives. Explore all our healthcare services and experience the Velammal difference</p>
            </div>
        </div>

        {/* links and body */}
        <div className='flex flex-row justify-between gap-[100px]'>

            {/* redirecting links */}
            <div className='flex flex-col gap-[29px]'>
                <button className="w-auto h-[60px] py-[12px] px-[20px] border-2 border-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px]">
                    <p className="text-[20px] text-dark_text_blue">Velammal Medical College hospital and Research Institute</p>
                    <Image src={icon} alt="arrow up right"></Image>
                </button>
                <button className="w-auto h-[60px] py-[12px] px-[20px] border-2 border-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px]">
                    <p className="text-[20px] text-dark_text_blue">Velammal Medical College hospital and Research Institute</p>
                    <Image src={icon} alt="arrow up right"></Image>
                </button>
                <button className="w-auto h-[60px] py-[12px] px-[20px] border-2 border-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px]">
                    <p className="text-[20px] text-dark_text_blue">Velammal Medical College hospital and Research Institute</p>
                    <Image src={icon} alt="arrow up right"></Image>
                </button>
                <button className="w-auto h-[60px] py-[12px] px-[20px] border-2 border-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px]">
                    <p className="text-[20px] text-dark_text_blue">Velammal Medical College hospital and Research Institute</p>
                    <Image src={icon} alt="arrow up right"></Image>
                </button>
                <button className="w-auto h-[60px] py-[12px] px-[20px] border-2 border-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px]">
                    <p className="text-[20px] text-dark_text_blue">Velammal Medical College hospital and Research Institute</p>
                    <Image src={icon} alt="arrow up right"></Image>
                </button>
                <button className="w-auto h-[60px] py-[12px] px-[20px] border-2 border-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px]">
                    <p className="text-[20px] text-dark_text_blue">Velammal Medical College hospital and Research Institute</p>
                    <Image src={icon} alt="arrow up right"></Image>
                </button> 
            </div>

            {/* image and body */}
            <div className='flex flex-col w-[510px] -mt-4'>
                <Image src={network_image} alt='network_image' className='w-[510px] h-[350px]'></Image>
                <p className='text-dark_text_blue font-[600] text-[24px] leading-[32px]'>Velammal Medical College hospital and Research Institute, Madurai</p>
                <p className='text-body_text_white font-[400] text-[19px] leading-[26px]'>Delivering world-class medical care through compassion, innovation, and an unwavering commitment to improving lives. Explore all our healthcare services and experience the Velammal difference</p>
            </div>


        </div>          
    </div>
  )
}

export default Network