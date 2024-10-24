"use client"


import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    "md:text-center font-medium text-[16px] text-start md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px] md:px-4 rounded-t-[20px] cursor-pointer transition-all duration-0 ease-in-out";
  const contentClasses =
    "bg-primary_blue text-white font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px] px-4 md:px-[37px] py-[14px] md:py-[18px] rounded-b-[20px]";

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
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
      <Accordion
        type="single"
        collapsible
        className="w-full md:w-[630px] flex flex-col items-center justify-center gap-[20px] md:gap-[28px]"
      >
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="w-full h-auto px-4 md:px-[36px]"
          >
            <AccordionTrigger
              className={`${triggerClasses} ${
                openItem === faq.id ? "bg-blue text-white bg-primary_blue" : ""
              }`}
              onClick={() => handleToggle(faq.id)}
            >
              {faq.question}
            </AccordionTrigger>
            <Image
              src={faq_accordian_underline}
              alt="faq_accordian_underline"
              className="h-[1px] w-[10px]"
            />
            {openItem === faq.id && (
              <AccordionContent className={contentClasses}>
                {faq.answer}
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AccordionDemo;
