"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import underline from "@/public/experts_underline.svg";
import search from "@/public/search_icon.svg";
import bg from "@/public/experts_cards_bg.svg";
import arrow from "@/public/experts_cards_arrow.svg";
import left from "@/public/testimonial_left_arrow.svg";
import right from "@/public/testimonial_right_arrow.svg";

import doctors from "@/json/Experts_details";

const Experts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4); // Default to 4 cards
  const [selectedLocation, setSelectedLocation] = useState<string | null>("Chennai"); // Track selected location

  // State for handling dragging
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) setCardsToShow(1); // Extra small devices
        else if (window.innerWidth < 768) setCardsToShow(2); // Small devices
        else if (window.innerWidth < 1024) setCardsToShow(3); // Medium devices
        else setCardsToShow(4); // Default devices
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const nextCards = () => {
    const maxIndex = doctors.length - cardsToShow;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCards = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle drag start
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    if ("touches" in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
  };

  // Handle drag move
  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    let currentX;
    if ("touches" in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }
    setOffsetX(currentX - startX);
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    if (offsetX < -50) {
      nextCards(); // Swipe left
    } else if (offsetX > 50) {
      prevCards(); // Swipe right
    }
    setOffsetX(0); // Reset offset after swipe
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-[20px] md:px-[50px] pb-[50px] select-none">
      <div className="flex flex-col items-center justify-center md:w-[1053px] w-full gap-[15px] md:gap-[25px]">
        {/* Heading and underline */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-dark_text_blue text-center font-[700] md:text-[50px] text-[32px] md:leading-[70px] leading-[45px] capitalize md:px-[80px] px-[20px] py-[40px] md:py-[84px]">
            Meet the experts behind your care
          </p>
          <Image src={underline} alt="underline" className="-mt-[40px] md:-mt-[90px]" />
        </div>

        {/* Subheading */}
        <p className="text-body_text_white md:text-center text-justify font-[500] md:text-[20px] text-[16px] md:leading-[31px] leading-[24px] tracking-[0.3px] font-general-sans px-2 md:px-0">
          At Velammal Hospital, our team of 450+ highly skilled doctors is
          dedicated to providing the best medical care across various
          specialties. Every doctor brings a wealth of experience, compassion,
          and expertise to ensure your health is in the best hands.
        </p>
      </div>

      {/* Search doctors and places tab */}
      <div className="flex flex-col items-center justify-center gap-[25px] mt-[50px] md:mt-[100px] w-full">
        {/* Search bar */}
        <div className="flex flex-row items-center justify-center gap-5">
          <input
            type="text"
            placeholder="Search Doctors"
            className="w-[240px] md:w-[400px] h-[50px] md:h-[56px] border-4 border-primary_blue rounded-full p-[20px] md:p-[32px] focus:outline-none focus:ring-0"
          />
          <Image src={search} alt="search icon" height={24} width={24} className="-ml-14 md:-ml-20" />
        </div>

        {/* Places tabs */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-[55px]">
          <button
            className={`h-auto w-[120px] md:w-[146px] flex px-[20px] py-[10px] md:px-[30px] md:py-[12px] justify-center items-center gap-[10px] rounded-full
            ${
              selectedLocation === "Madurai"
                ? "bg-primary_blue text-white"
                : "bg-[#F5F6F8] text-black"
            }`}
            onClick={() => setSelectedLocation("Madurai")}
          >
            Madurai
          </button>
          <button
            className={`h-auto w-[120px] md:w-[146px] flex px-[20px] py-[10px] md:px-[30px] md:py-[12px] justify-center items-center gap-[10px] rounded-full
            ${
              selectedLocation === "Chennai"
                ? "bg-primary_blue text-white"
                : "bg-[#F5F6F8] text-black"
            }`}
            onClick={() => setSelectedLocation("Chennai")}
          >
            Chennai
          </button>
        </div>
      </div>

      {/* Doctors slider and button */}
      <div className="flex flex-col items-center justify-center gap-[50px] mt-[66px]">
        {/* Doctors cards */}
        <div
          className="h-auto w-full flex flex-row gap-[30px] flex-wrap justify-center cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {/* Individual cards */}
          {doctors.slice(currentIndex, currentIndex + cardsToShow).map((doctor, index) => (
            <div
              key={index}
              className="bg-cover bg-center h-auto w-[260px] md:w-[281px] pb-3 pl-3 flex flex-col items-start justify-center rounded-xl"
              style={{ backgroundImage: `url(${bg.src})` }}
            >
              {/* Doctor image */}
              <Image src={doctor.image} alt={doctor.name} className="h-[254px] w-[264px] mt-3" />
              {/* Doctor name and specialization */}
              <div className="-mt-[50px] flex w-[240px] md:w-[260px] h-[60px] p-[12px_20px] justify-between items-center flex-shrink-0 rounded-[10px] bg-gradient-to-r from-[rgba(37,180,248,0.30)] to-[rgba(37,180,248,0)] backdrop-blur-[81.85px]">
                <div className="flex flex-col gap-[1px]">
                  <p className="md:text-[16px] text-[14px] font-bold leading-[120%] capitalize text-dark_text_blue">{doctor.name}</p>
                  <p className="md:text-[12px] text-[11px] leading-[120%] capitalize text-black">{doctor.specialization}</p>
                  <p className="md:text-[12px] text-[11px] leading-[120%] capitalize text-black">{doctor.type}</p>
                </div>
                <button>
                  <Image src={arrow} alt="arrow" className="transition-transform duration-300 ease-in-out hover:rotate-45"/>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center gap-[20px]">
          <button onClick={prevCards} disabled={currentIndex === 0}>
            <Image src={left} alt="left" height={60} width={60} className="bg-white border-4 border-primary_blue rounded-full" />
          </button>
          <button onClick={nextCards} disabled={currentIndex >= doctors.length - cardsToShow}>
            <Image src={right} alt="right" height={60} width={60} className="bg-white border-4 border-primary_blue rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
