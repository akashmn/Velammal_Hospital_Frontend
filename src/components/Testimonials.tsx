"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import underline from "@/public/testimonial_underline.svg";
import stars from "@/public/testimonial_review_star.svg";
import left from "@/public/testimonial_left_arrow.svg";
import right from "@/public/testimonial_right_arrow.svg";

// Import the testimonials data
import testimonialsData from "@/json/Testimonials_data";


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);

  // Adjust the number of testimonials per page based on screen size
  useEffect(() => {
    const updateTestimonialsPerPage = () => {
      if (typeof window !== "undefined") {
        // Only access window if it's defined
        if (window.innerWidth < 768) {
          setTestimonialsPerPage(1);
        } else if (window.innerWidth < 1024) {
          setTestimonialsPerPage(2);
        } else {
          setTestimonialsPerPage(3);
        }
      }
    };

    updateTestimonialsPerPage();
    window.addEventListener("resize", updateTestimonialsPerPage);

    return () => {
      window.removeEventListener("resize", updateTestimonialsPerPage);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerPage >= testimonialsData.length
        ? 0
        : prevIndex + testimonialsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonialsData.length - testimonialsPerPage
        : prevIndex - testimonialsPerPage
    );
  };

  return (
    <div className="flex flex-col items-center gap-10 md:gap-16 px-4 mt-10 lg:mt-0">
      {/* Heading & Subheading */}
      <div className="mt-20 w-full flex flex-col items-center gap-5">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-2xl md:text-[42px] font-Semibold leading-tight text-dark_text_blue">
            Patient Testimonials
          </p>
          <Image src={underline} alt="underline" className="w-40 md:w-80 -mt-2" />
        </div>
        <p className="text-base md:text-[18px] font-Medium leading-relaxed text-center max-w-xl">
          We are proud of our exceptional team for their lifesaving efforts.
          Velammal, Saving Lives Through Expert Procedures
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full flex flex-col md:flex-row gap-5 justify-center items-center">
        {testimonialsData
          .slice(currentIndex, currentIndex + testimonialsPerPage)
          .map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-[350px] lg:w-[413px] p-5 rounded-xl shadow-xl bg-white flex flex-col gap-5 hover:scale-110 duration-300 ease-in-out"
            >
              {/* Image, Name, and Stars */}
              <div className="flex flex-row items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
                <div>
                  <p className="text-dark_text_blue text-sm md:text-[20px] font-Medium leading-tight">
                    {testimonial.name}
                  </p>
                  <Image src={stars} alt="stars" className="w-16 md:w-20 mt-2" />
                </div>
              </div>
              {/* Review Text */}
              <p className="text-sm md:text-[15px] font-Medium text-[#3C4959] leading-6">{testimonial.review}</p>
            </div>
          ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-row gap-5">
        <button onClick={handlePrev}>
          <Image
            src={left}
            alt="left"
            className="w-12 h-12 md:w-14 md:h-14 bg-white border-4 border-primary_blue rounded-full"
          />
        </button>
        <button onClick={handleNext}>
          <Image
            src={right}
            alt="right"
            className="w-12 h-12 md:w-14 md:h-14 bg-white border-4 border-primary_blue rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
