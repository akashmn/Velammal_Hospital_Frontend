import Image from 'next/image'
import icon from '@/public/arrow_up_right.png'

import search from "@/public/search_icon.svg"
import send_icon from "@/public/send_icon.svg"
import cardiology_news_article from "@/public/cardiology_news_article.svg"


const News_Articles = () => {
  return (
    <div className="py-[100px] px-[100px] flex flex-col gap-[40px]">
        {/* heading and search buttons */}
        <div className='flex flex-col gap-[40px]'>
            <p className="text-[42px] font-bold leading-[52.5px] capitalize font-general-sans text-dark_text_blue">Stay Informed with the Latest from Velammal Hospital</p>

            {/* body and search button */}
            <div className='flex flex-row items-center justify-between gap'>
                <p className='h-auto w-[616px] text-[20px] font-medium leading-[31px] tracking-[0.3px] font-general-sans text-body-text'>Get the latest health tips, medical advancements, and hospital updates straight to your inbox. Subscribe to our newsletter and never miss an important update.</p>
                <div className='flex flex-row items-center justify-center gap-[5rem]'>
                    <div className="flex flex-row items-center justify-center gap-5">
                        <input type="text" placeholder="Search News & Articles" className="w-[308px] h-[56px] border-4 border-primary_blue rounded-full p-[32px]"/>
                        <Image src={search} alt="seach icon" height={24} width={24} className="-ml-20"></Image>
                    </div>

                    <button className="w-[270px] h-[60px] py-[12px] px-[20px] bg-primary_blue flex flex-row items-center justify-between rounded-full gap-[15px]">
                        <p className="text-[14px] text-white font-semibold">View All</p>
                        <Image src={icon} alt="arrow up right"></Image>
                    </button>
                </div>
            </div>
        </div>

        {/* input feild:: email */}
        <div className='flex flex-row'>
            <input type="email" placeholder="Enter your email" className="w-[400px] h-[56px] border-4 border-dark_text_blue rounded-full p-[32px]"/>
            <Image src={send_icon} alt='send_icon' height={24} width={24} className='-ml-[55px]'></Image>
        </div>

        {/* news articles */}
        <div className='grid grid-cols-4 gap-[20px] h-auto w-full'>
            {/* individual news article */}
            <div className='flex flex-col gap-[20px] w-[305px] h-[452px] bg-secondary_white px-[15px] py-[30px] rounded-[10px]'>
                <Image src={cardiology_news_article} alt='cardiology_news_article' className='h-[200px] w-full'></Image>

                {/*tag, heading and body */}
                <div className='flex flex-col gap-[5px]'>
                    <p className='bg-dark_text_blue text-white h-[35px] w-[130px] text-center px-[13px] py-[5px] rounded-xl'>Cardiology</p>
                    <p className='w-full text-[18px] font-bold leading-[27.9px] tracking-[0.27px] text-dark_text_blue'>Advanced Heart Care for Over 1 Lakh Patients</p>
                    <p className='text-[18px] font-medium leading-[27.9px] tracking-[0.27px] font-general-sans text-body_text_white'>Cutting-edge treatments and successful outcomes from the cardiology department</p>
                </div>
            </div>

            <div className='flex flex-col gap-[20px] w-[305px] h-[452px] bg-secondary_white px-[15px] py-[30px] rounded-[10px]'>
                <Image src={cardiology_news_article} alt='cardiology_news_article' className='h-[200px] w-full'></Image>

                {/*tag, heading and body */}
                <div className='flex flex-col gap-[5px]'>
                    <p className='bg-dark_text_blue text-white h-[35px] w-[130px] text-center px-[13px] py-[5px] rounded-xl'>Cardiology</p>
                    <p className='w-full text-[18px] font-bold leading-[27.9px] tracking-[0.27px] text-dark_text_blue'>Advanced Heart Care for Over 1 Lakh Patients</p>
                    <p className='text-[18px] font-medium leading-[27.9px] tracking-[0.27px] font-general-sans text-body_text_white'>Cutting-edge treatments and successful outcomes from the cardiology department</p>
                </div>
            </div>

            <div className='flex flex-col gap-[20px] w-[305px] h-[452px] bg-secondary_white px-[15px] py-[30px] rounded-[10px]'>
                <Image src={cardiology_news_article} alt='cardiology_news_article' className='h-[200px] w-full'></Image>

                {/*tag, heading and body */}
                <div className='flex flex-col gap-[5px]'>
                    <p className='bg-dark_text_blue text-white h-[35px] w-[130px] text-center px-[13px] py-[5px] rounded-xl'>Cardiology</p>
                    <p className='w-full text-[18px] font-bold leading-[27.9px] tracking-[0.27px] text-dark_text_blue'>Advanced Heart Care for Over 1 Lakh Patients</p>
                    <p className='text-[18px] font-medium leading-[27.9px] tracking-[0.27px] font-general-sans text-body_text_white'>Cutting-edge treatments and successful outcomes from the cardiology department</p>
                </div>
            </div>

            <div className='flex flex-col gap-[20px] w-[305px] h-[452px] bg-secondary_white px-[15px] py-[30px] rounded-[10px]'>
                <Image src={cardiology_news_article} alt='cardiology_news_article' className='h-[200px] w-full'></Image>

                {/*tag, heading and body */}
                <div className='flex flex-col gap-[5px]'>
                    <p className='bg-dark_text_blue text-white h-[35px] w-[130px] text-center px-[13px] py-[5px] rounded-xl'>Cardiology</p>
                    <p className='w-full text-[18px] font-bold leading-[27.9px] tracking-[0.27px] text-dark_text_blue'>Advanced Heart Care for Over 1 Lakh Patients</p>
                    <p className='text-[18px] font-medium leading-[27.9px] tracking-[0.27px] font-general-sans text-body_text_white'>Cutting-edge treatments and successful outcomes from the cardiology department</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News_Articles