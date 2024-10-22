"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import large1 from "@/public/trust_carousel2_largeImage1.svg";
import small1 from "@/public/trust_carousel2_small_image1.svg";
import small2 from "@/public/trust_carousel2_small_image2.svg";

interface CarouselItem {
  image: StaticImageData;
  text: string;
}

const Carousel: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const largeItems: CarouselItem[] = [
    { image: large1, text: "51 Lakhs + Patients Treated" },
    { image: large1, text: "1,11,000+ Successfull Operations" },
  ];

  const smallItems1: CarouselItem[] = [
    { image: small1, text: "12+ Years Trusted Legacy" },
    { image: small2, text: "32+ Specialty" },
  ];

  const smallItems2: CarouselItem[] = [
    { image: small2, text: "1100+  Dedicated Staffs"},
    { image: small1, text: "450+ Doctors"},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % largeItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [largeItems.length]);

  return (
    <div className="flex w-[1277px] max-sm:hidden rounded-xl">
      {/* Large Horizontal Carousel */}
      <div className="w-2/3 h-96 relative overflow-hidden">
        <div
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${largeItems.length * 100}%`,
            transform: `translateX(-${
              slideIndex * (100 / largeItems.length)
            }%)`,
          }}
        >
          {largeItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex items-center justify-center border-none relative"
              style={{
                width: `${100 / largeItems.length}%`,
              }}
            >
              <Image
                src={item.image}
                alt={`Large Item ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-l-xl border-none"
              />
              {/* Overlay Text for Large Image */}
              <div className="absolute inset-0 flex items-end justify-center">
                <p className="text-white text-4xl font-bold  p-4 rounded-md">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Carousels */}
      <div className="w-1/3 h-96 grid grid-rows-2">
        {/* First Vertical Carousel (Up) */}
        <div className="relative h-full overflow-hidden">
          <div
            className="w-full h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateY(-${slideIndex * 100}%)`,
            }}
          >
            {smallItems1.map((item, index) => (
              <div
                key={index}
                className="h-full flex items-center justify-center relative"
              >
                <Image
                  src={item.image}
                  alt={`Small Item 1 ${index + 1}`}
                  className="w-full h-full object-cover rounded-tr-xl"
                />
                {/* Overlay Text for Small Image 1 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-[36px] font-semibold text-center p-3 rounded-md">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Vertical Carousel (Down) */}
        <div className="relative h-full overflow-hidden">
          <div
            className="w-full h-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateY(-${
                ((slideIndex + 1) % smallItems2.length) * 100
              }%)`,
            }}
          >
            {smallItems2.map((item, index) => (
              <div
                key={index}
                className="h-full flex items-center justify-center relative"
              >
                <Image
                  src={item.image}
                  alt={`Small Item 2 ${index + 1}`}
                  className="w-full h-full object-cover rounded-br-xl"
                />
                {/* Overlay Text for Small Image 2 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-[36px] font-semibold text-center p-3 rounded-md">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
