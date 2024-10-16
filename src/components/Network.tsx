import Image from 'next/image'

import underline from '@/public/hero_underline.png'

const Network = () => {
  return (
    <div className='h-auto w-full px-[80px] py-[82px] flex flex-col items-center justify-center gap-[80px]'>
        {/* heading & underline */}
        <div className='flex flex-col items-center justify-center w-[1290px] gap-5'>
            <p className='text-[#011632] text-center font-[600] text-[56px] leading-[21px] font-general-sans" style="leading-trim: both; text-edge: cap;"'>Velammal Healthcare Network</p>
            <Image src={underline} alt='underline'></Image>
        </div>

        {/* subheading & body */}
        <div className='flex flex-col items-center justify-center w-[1290px] gap-5'>
            <p className='text-dark_text_blue text-center font-[600] text-[32px] leading-[38.4px]'>Compassionate care for a healthier tomorrow</p>
            <p className='text-body_text_white text-center font-[500] text-[20px] leading-[26px]'>Delivering world-class medical care through compassion, innovation, and an unwavering commitment to improving lives. Explore all our healthcare services and experience the Velammal difference</p>
        </div>
    </div>
  )
}

export default Network