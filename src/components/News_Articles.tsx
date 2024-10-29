import Image from 'next/image';
import icon from '@/public/arrow_up_right.png';
import search from '@/public/search_icon.svg';
import send_icon from '@/public/send_icon.svg';
import { newsArticlesData } from '@/json/News_Articles_data';

const News_Articles = () => {
  return (
    <div className="mt-28 md:mt-0 lg:py-[50px] px-[20px] md:py-[100px] md:px-[100px] flex flex-col gap-[30px] md:gap-[40px]">
      {/* Heading and search buttons */}
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <p className="text-[28px] md:text-[42px] font-Semibold leading-[32px] md:leading-[52.5px] capitalize  text-dark_text_blue text-center md:text-left">
          Stay Informed with the Latest from Velammal Hospital
        </p>

        {/* Body and search button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
          <p className="w-full md:w-[616px] text-[16px] md:text-[20px] font-medium leading-[26px] md:leading-[31px] text-[#3C4959] tracking-[0.3px] font-Medium text-body-text md:text-left">
            Get the latest health tips, medical advancements, and hospital updates straight to your inbox. Subscribe to our newsletter and never miss an important update.
          </p>

          {/* Search button */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="flex flex-row items-center justify-center gap-2 relative">
              <input
                type="text"
                placeholder="Search News & Articles"
                className="w-[250px] text-[15px] font-Medium md:w-[308px] h-[48px] md:h-[56px] border-4 border-primary_blue rounded-full px-8 focus:outline-none focus:ring-0"
              />
              <Image src={search} alt="search icon" height={24} width={24} className="absolute right-5"  />
            </div>

            <button className="w-[200px] md:w-[270px] h-[48px] md:h-[60px] py-[12px] px-[20px] bg-primary_blue flex flex-row items-center justify-between rounded-full gap-[15px] hover:scale-105 transition-all duration-300 ease-in-out hover:drop-shadow-2xl group">
              <p className="text-[14px] text-white font-Semibold">View All</p>
              <Image
                className="w-8 h-8 transition-transform duration-300 ease-in-out group-hover:rotate-45"
                src={icon}
                alt="arrow up right"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Input field for email */}
      <div className="max-sm:hidden flex flex-row items-center justify-center md:justify-start gap-2 md:gap-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[250px] md:w-[400px] h-[48px] md:h-[56px] border-4 border-dark_text_blue rounded-full px-5"
        />
        <Image src={send_icon} alt="send_icon" height={24} width={24} className="-ml-[40px]" />
      </div>

      {/* News articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full">
        {newsArticlesData.map((article) => (
          <div
            key={article.id}
            className="flex flex-col gap-[10px] w-full h-auto bg-secondary_white px-[15px] py-[15px] md:py-[20px] rounded-[10px]"
          >
            <Image
              src={article.image}
              alt={article.title}
              className="h-[150px] md:h-[200px] w-full object-cover rounded-[10px]"
            />
            <div className="flex flex-col gap-[5px]">
              <p className="bg-dark_text_blue text-white h-[30px] md:h-[35px] w-fit px-5 flex items-center py-5 text-center rounded ">
                {article.tag}
              </p>
              <p className="w-full text-[16px] md:text-[18px] font-Semibold leading-[24px] md:leading-[27.9px] text-dark_text_blue mt-2">
                {article.title}
              </p>
              <p className="text-[14px] md:text-[18px] font-Medium leading-[24px] md:leading-[27.9px] text-body_text_white">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News_Articles;
