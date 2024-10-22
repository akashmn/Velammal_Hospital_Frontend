"use client"

import React, { useState, useEffect } from "react";

import Image, { StaticImageData } from "next/image";

import large1 from "@/public/trust_carousel2_largeImage1.svg";
import small1 from "@/public/trust_carousel2_small_image1.svg";
import small2 from "@/public/trust_carousel2_small_image2.svg";


const Carousel: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const largeItems: StaticImageData[] = [
    large1,
    large1
  ]; // Four slides

  const smallItems1: StaticImageData[] = [
    small1,
    small2
  ];

  const smallItems2: StaticImageData[] = [
    small2,
    small1
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
            width: `${largeItems.length * 100}%`, // Set width based on number of items
            transform: `translateX(-${
              slideIndex * (100 / largeItems.length)
            }%)`, // Move left (negative direction)
          }}
        >
          {largeItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex items-center justify-center border-none"
              style={{
                width: `${100 / largeItems.length}%`,
              }}
            >
              <Image
                src={item}
                alt={`Large Item ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-l-xl border-none"
              />
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
                className="h-full flex items-center justify-center"
              >
                <Image
                  src={item}
                  alt={`Small Item 1 ${index + 1}`}
                  className="w-full h-full object-cover rounded-tr-xl"
                />
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
                className="h-full flex items-center justify-center"
              >
                <Image
                  src={item}
                  alt={`Small Item 2 ${index + 1}`}
                  className="w-full h-full object-cover rounded-br-xl" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
