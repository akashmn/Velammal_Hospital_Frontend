"use client";

import { useState } from "react";
import Image from "next/image";
import underline from "@/public/faq_underline.svg";
import faq_accordian_underline from "@/public/faq_accrodian_underline.svg";
import faqs from "@/json/Faq_data";

export function AccordionDemo() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const headingClasses =
    "text-dark_text_blue font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[52.5px] capitalize";
  const descriptionClasses =
    "text-body_text_white text-[16px] font-semibold md:text-[20px] leading-[24px] md:leading-[31px] tracking-[0.3px]";
  const triggerClasses =
    "flex items-center justify-between cursor-pointer text-left py-4 px-4 transition-all duration-300 ease-in-out"; 
  const contentClasses =
    "bg-primary_blue text-white font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px] px-4 md:px-[37px] py-4 transition-all duration-300 ease-in-out";

  const handleToggle = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="md:mt-0 mt-36 flex flex-col items-center justify-center py-[40px] md:py-[70px] gap-[40px] md:gap-[54px]">
      {/* Heading and Description */}
      <div className="flex flex-col items-center justify-center text-center gap-[15px] md:gap-[20px] px-4">
        <div className="flex flex-col items-center justify-center">
          <p className={headingClasses}>Frequently Asked Questions</p>
          <Image src={underline} alt="underline" />
        </div>
        <p className={descriptionClasses}>
          Quality Care Explained: FAQs About Our Standards and Services
        </p>
      </div>

      {/* Accordion */}
      <div className="w-full md:w-[630px] flex flex-col items-center justify-center gap-[20px] md:gap-[28px]">
        {faqs.map((faq) => (
          <div key={faq.id} className="w-full h-auto">
            {/* Container for Trigger and Content */}
            <div className={`${openItem === faq.id ? "rounded-xl overflow-hidden border bg-primary_blue  border-gray-300" : ""}`}>
              {/* Trigger */}
              <div
                onClick={() => handleToggle(faq.id)}
                className={`${triggerClasses} ${openItem === faq.id ? "bg-primary_blue text-white " : "bg-white text-black "}`}
              >
                <span className="text-primary_black mr-2">&#8226;</span>
                <span className="flex-grow">{faq.question}</span>
                <span className={`flex items-center justify-center border-[2px] rounded-full w-5 h-5 font-bold ${openItem === faq.id ? "border-white text-white" : "border-black text-black"}`}>
                  {openItem === faq.id ? "-" : "+"}
                </span>
              </div>

              {/* Divider */}
              <Image
                src={faq_accordian_underline}
                alt="faq_accordian_underline"
                className="h-[2px] w-full "
              />

              {/* Content with Animation */}
              <div
                className={`${openItem === faq.id ? "animate-accordion-down" : "animate-accordion-up"} ${contentClasses}  ${openItem === faq.id ? "block" : "hidden"}`}
                style={{ height: openItem === faq.id ? "auto" : "0" }} // Adjust height for animation
              >
                {faq.answer}
              </div>
            </div>

            {/* HR for separation */}
            <hr className="border-t border-gray-300 w-full my-2  " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionDemo;
