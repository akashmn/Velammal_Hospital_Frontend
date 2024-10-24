"use client";

import consult_online from '@/public/hero_consult_online.svg';
import health_check from '@/public/hero_health_check.svg';
import buy_medicines from '@/public/hero_buy_medicines.svg';
import health_records from '@/public/hero_health_record.svg';
import book_appointment from '@/public/hero_book_appointment.svg';
import book_appointment_white from '@/public/hero_book_appointment_blue.svg';
import { useState } from "react";
import Image from "next/image";
import hero2 from '@/public/hero_image2.png';
import underline from '@/public/hero_underline.png';
import calling from '@/public/Calling.png';
import calling_white from '@/public/hero_calling_white.svg';
import arrowIcon from '@/public/arrow_up_right.png';

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [icon, setIcon] = useState(book_appointment);

  return (
    <div className="h-auto flex flex-col justify-center">
      <div className="z-0 flex flex-col ml-1 md:ml-[104px]">
        <div className="z-1 md:flex md:flex-row-reverse">
          <Image src={hero2} alt="hero-image" />
        </div>
        <div className="z-2 -mt-[450px] md:-mt-[803px] h-auto md:h-[764px] w-full md:w-[1146px] flex flex-col gap-5 md:gap-[50px] bg-gradient-to-r from-white to-transparent via-[rgba(255,255,255,0.82)] px-4 md:px-0">
          <div className="flex flex-col mt-[150px]">
            <p className="text-[25px] md:text-[62px] mt-[10em] md:mt-0 font-bold leading-[120%] tracking-[-1.24px] text-[#011632] capitalize">Healthcare you can trust</p>
            <Image src={underline} alt="hero_underline" className="ml-32 md:ml-[340px] w-[11em] md:w-[27em]" />
          </div>
          <div className="">
            <p className="text-[20px] md:text-[40px] font-bold leading-[155%] tracking-[0.3px]">Your health, our priority</p>
            <p className="text-[16px] md:text-[17px] w-[16em] mb-6 md:mb-0 md:w-[35em] mt-[30px] text-[#3C4959] font-medium leading-[155%] tracking-[0.3px]">Experience advanced, compassionate medical services from Tamil Nadu’s leading multispecialty hospital. Offering 24/7 Expert Medical care with a commitment to excellence</p>
            <div className="md:mt-14 flex flex-col md:flex-row gap-5 md:gap-10 justify-center md:justify-start">
              <button className="w-[15em] md:w-auto h-[50px] md:h-[60px] py-[12px] px-[20px] bg-primary_blue flex flex-row items-center justify-center rounded-full gap-[10px] hover:scale-105 transition-all duration-300 ease-in-out hover:drop-shadow-2xl group">
                <p className="text-[14px] text-white font-semibold">Book an appointment</p>
                <Image className="w-8 h-8 transition-transform duration-300 ease-in-out group-hover:rotate-45" src={arrowIcon} alt="arrow up right" />
              </button>

              <div
                className="flex flex-row items-start md:items-center justify-start md:justify-start gap-3"
              >
                <Image
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  src={isHovered ? calling_white : calling} // Conditionally render the image
                  alt="caller-image"
                  className="h-[45px] w-[45px] md:h-[55px] md:w-[55px] rounded-full bg-g border p-[15px] border-primary_blue hover:scale-110 hover:bg-[#40c444] transition-all duration-300 hover:rotate-[20deg]"
                />
                <div>
                  <p className="text-[14px] text-primary_blue font-semibold">24H Emergency</p>
                  <p className="text-[14px] font-semibold">(0452) 711 3333</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hero cards */}
      <div className="md:mx-[100px] md:z-5 mt-[40px] md:-mt-[40px] md:w-auto md:h-[172px] md:flex md:flex-row md:items-center gap-[20px] md:gap-[30px] md:justify-center grid grid-cols-2 pr-[0.5em] md:pr-0 pl-[0.5em] md:pl-0">
        <div className="w-[11em] md:w-[250px] bg-white h-[11em] md:h-full flex flex-col justify-center items-center py-[40px] px-[10px] gap-5 rounded-xl drop-shadow-2xl group">
          <Image
            src={consult_online}
            alt="Consult Online"
            height={50}
            width={50}
            className="border bg-hero_card_blue rounded-full group-hover:scale-125 group-hover:bg-primary_blue duration-300 ease-in-out transition-all p-2"
          />
          <p className="text-[14px] font-semibold">Consult Online</p>
        </div>

        <div className="w-[11em] md:w-[250px] bg-white h-[11em] md:h-full flex flex-col justify-center items-center py-[40px] px-[10px] gap-5 rounded-xl drop-shadow-2xl group">
          <Image
            src={health_check}
            alt="Health Check-up"
            height={50}
            width={50}
            className="border  rounded-full bg-hero_card_blue group-hover:scale-125 group-hover:bg-primary_blue duration-300 ease-in-out transition-all p-2"
          />
          <p className="text-[14px] font-semibold">Health Check-up</p>
        </div>

        <div className="w-[11em] md:w-[250px] bg-white h-[11em] md:h-full flex flex-col justify-center items-center py-[40px] px-[10px] gap-5 rounded-xl drop-shadow-2xl group">
          <Image
            src={buy_medicines}
            alt="Buy Medicines"
            height={50}
            width={50}
            className="border rounded-full bg-hero_card_blue group-hover:scale-125 group-hover:bg-primary_blue duration-300 ease-in-out transition-all p-2"
          />
          <p className="text-[14px] font-semibold">Buy Medicines</p>
        </div>

        <div className="w-[11em] md:w-[250px] bg-white h-[11em] md:h-full flex flex-col justify-center items-center py-[40px] px-[10px] gap-5 rounded-xl drop-shadow-2xl group">
          <Image
            src={health_records}
            alt="Health Records"
            height={50}
            width={50}
            className="border bg-hero_card_blue rounded-full group-hover:scale-125 group-hover:bg-primary_blue duration-300 ease-in-out transition-all p-2"
          />
          <p className="text-[14px] font-semibold">Health Records</p>
        </div>

        <div
      className="w-[11em] md:w-[250px] bg-hero_card_blue h-[11em] md:h-full flex flex-col justify-center items-center gap-5 rounded-xl drop-shadow-2xl group hover:bg-white  duration-300 ease-in-out transition-all"
      onMouseEnter={() => setIcon(book_appointment_white)} // Change icon on hover
      onMouseLeave={() => setIcon(book_appointment)} // Reset icon on mouse leave
    >
      <Image
        src={icon} // Use the state variable for the image source
        alt="Book Appointment"
        height={50}
        width={50}
        className="border rounded-full bg-white group-hover:scale-125 group-hover:bg-primary_blue duration-300 ease-in-out transition-all p-2"
      />
      <p className="text-[14px] text-white font-semibold group-hover:text-black duration-300 ease-in-out transition-all">
        Book Appointment
      </p>
    </div>
      </div>
    </div>
  );
};

export default HeroSection;
