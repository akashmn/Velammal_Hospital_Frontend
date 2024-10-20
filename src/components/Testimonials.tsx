"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import underline from "@/public/testimonial_underline.svg";
import vidya from "@/public/testimonial_vidya_image.svg";
import stars from "@/public/testimonial_review_star.svg";
import left from "@/public/testimonial_left_arrow.svg";
import right from "@/public/testimonial_right_arrow.svg";

//slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    name: "Vidya",
    image: vidya,
    review:
      "Velammal Hospital has saved the life of a 1-year-old girl from Bangalore. Referred with breathing difficulties, experts at our ENT department swiftly diagnosed a groundnut blocking her airway. Thanks to the expertise of ENT surgeon Dr. Rajavel.",
  },
  {
    name: "Venugopal",
    image: vidya,
    review:
      "Thanks to the remarkable multidisciplinary team at Velammal Hospital—including general surgeons, lab professionals, and plastic surgeons—this seemingly impossible situation was transformed into a success story, making Mr. Venugopal’s leg fully functional.",
  },
  {
    name: "Kavya",
    image: vidya,
    review:
      "Breast milk, often referred to as liquid gold, is essential for every baby's health. Thanks to the awareness session at Velammal, Mrs. Kalai Selvi committed to donating milk and helping countless babies without affecting her own baby’s nutrition.",
  },
  {
    name: "1",
    image: vidya,
    review:
      "Velammal Hospital has saved the life of a 1-year-old girl from Bangalore. Referred with breathing difficulties, experts at our ENT department swiftly diagnosed a groundnut blocking her airway. Thanks to the expertise of ENT surgeon Dr. Rajavel.",
  },
  {
    name: "2",
    image: vidya,
    review:
      "Velammal Hospital has saved the life of a 1-year-old girl from Bangalore. Referred with breathing difficulties, experts at our ENT department swiftly diagnosed a groundnut blocking her airway. Thanks to the expertise of ENT surgeon Dr. Rajavel.",
  },
  {
    name: "3",
    image: vidya,
    review:
      "Velammal Hospital has saved the life of a 1-year-old girl from Bangalore. Referred with breathing difficulties, experts at our ENT department swiftly diagnosed a groundnut blocking her airway. Thanks to the expertise of ENT surgeon Dr. Rajavel.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);

  // Adjust the number of testimonials per page based on screen size
  useEffect(() => {
    const updateTestimonialsPerPage = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerPage(2);
      } else {
        setTestimonialsPerPage(3);
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
    <div className="flex flex-col items-center gap-10 md:gap-16 px-4">
      {/* Heading & Subheading */}
      <div className="mt-20 w-full flex flex-col items-center gap-5">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-2xl md:text-3xl font-bold leading-tight uppercase text-dark_text_blue">
            Patient testimonials
          </p>
          <Image src={underline} alt="underline" className="w-40 md:w-80 -mt-2" />
        </div>
        <p className="text-base md:text-lg font-medium leading-relaxed text-center max-w-xl">
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
              className="w-full md:w-[350px] lg:w-[413px] p-5 rounded-xl shadow-xl bg-white flex flex-col gap-5"
            >
              {/* Image, Name, and Stars */}
              <div className="flex flex-row items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
                <div>
                  <p className="text-dark_text_blue text-sm md:text-base font-medium leading-tight">
                    {testimonial.name}
                  </p>
                  <Image src={stars} alt="stars" className="w-16 md:w-20" />
                </div>
              </div>
              {/* Review Text */}
              <p className="text-sm md:text-base">{testimonial.review}</p>
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
