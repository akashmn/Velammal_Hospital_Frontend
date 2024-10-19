import Image from 'next/image'
import icon from '@/public/arrow_up_right.png'
import underline from '@/public/hero_underline.png'
import network_image from '@/public/network_velammal_image.svg'

const Network = () => {
  return (
    <div className='bg-secondary_white h-auto w-full md:px-[80px] px-[20px] md:py-[82px] py-[40px] flex flex-col items-center justify-center gap-[50px] md:gap-[87px]'>
        <div className='flex flex-col items-center justify-center md:gap-[80px] gap-[25px]'>
            {/* heading & underline */}
            <div className='flex flex-col items-center justify-center md:w-[1290px] w-full md:gap-5 gap-2 px-4'>
                <p className='text-[#011632] text-center font-bold md:font-[600] md:text-[56px] text-[28px] md:leading-[21px] leading-none'>Velammal Healthcare Network</p>
                <Image src={underline} alt='underline' className='h-[5px] w-[200px]'></Image>
            </div>

            {/* subheading & body */}
            <div className='flex flex-col items-center justify-center md:w-[1290px] w-full gap-5'>
                <p className='text-dark_text_blue text-center font-[600] md:text-[32px] text-[18px] leading-[22px] md:leading-[38.4px]'>Compassionate care for a healthier tomorrow</p>
                <p className='text-body_text_white md:text-center text-justify font-[500] md:text-[20px] text-[15px] md:w-auto w-full md:leading-[26px] leading-[20px] md:px-0 px-[20px]'>
                  Delivering world-class medical care through compassion, innovation, and an unwavering commitment to improving lives. Explore all our healthcare services and experience the Velammal difference.
                </p>
            </div>
        </div>

        {/* links and body */}
        <div className='flex md:flex-row flex-col-reverse items-center justify-center gap-[50px] w-full'>
            {/* redirecting links */}
            <div className='flex flex-col gap-[20px] md:justify-evenly items-center w-[100%]'>
                {Array(7).fill("").map((_, idx) => (
                    <button key={idx} className="md:w-auto w-full md:h-[60px] md:py-[12px] py-[10px] md:px-5 px-2 border-2 border-primary_blue flex flex-row items-center justify-center rounded-full gap-[15px]">
                        <p className="md:text-[20px] text-[12px] text-dark_text_blue text-center md:px-0 px-5">Velammal Medical College hospital and Research Institute</p>
                        <Image src={icon} alt="arrow up right"/>
                    </button>
                ))}
            </div>

            {/* image and body */}
            <div className='flex flex-col md:w-[100%] w-full items-center justify-start md:gap-5 gap-[25px]'>
                <Image src={network_image} alt='network_image' className='md:w-[710px] w-[340px] h-auto'></Image>
                <p className='md:w-[600px] text-dark_text_blue font-[600] md:text-[24px] text-[17px] text-center md:text-justify md:p-0 px-4 md:leading-[32px] leading-[20px]'>
                  Velammal Medical College hospital and Research Institute, Madurai
                </p>
                <p className='md:w-[600px] text-body_text_white font-[400] md:text-[19px] text-[14px] md:leading-[26px] leading-[20px] md:px-0 px-[20px] text-justify'>
                  Delivering world-class medical care through compassion, innovation, and an unwavering commitment to improving lives. Explore all our healthcare services and experience the Velammal difference.
                </p>
            </div>
        </div>          
    </div>
  )
}

export default Network;
