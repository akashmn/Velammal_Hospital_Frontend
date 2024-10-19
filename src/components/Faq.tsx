import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  import Image from "next/image";
  import underline from "@/public/faq_underline.svg";
  
  export function AccordionDemo() {
    return (
      <div className="md:mt-0 mt-36 flex flex-col items-center justify-center py-[40px] md:py-[70px] gap-[40px] md:gap-[54px]">
        {/* Heading and Description */}
        <div className="flex flex-col items-center justify-center text-center gap-[15px] md:gap-[20px] px-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-dark_text_blue font-bold text-[28px] md:text-[42px] leading-[34px] md:leading-[52.5px] capitalize">
              Frequently Asked Questions
            </p>
            <Image src={underline} alt="underline" />
          </div>
          <p className="text-body_text_white text-[16px] font-semibold md:text-[20px] leading-[24px] md:leading-[31px] tracking-[0.3px]">
            Quality Care Explained: FAQs About Our Standards and Services
          </p>
        </div>
  
        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-[630px] flex flex-col items-center justify-center gap-[20px] md:gap-[28px]"
        >
          {/* Accordion Item 1 */}
          <AccordionItem value="item-1" className="w-full h-auto px-4 md:px-[36px]">
            <AccordionTrigger className="md:text-center font-medium text-[16px] text-start md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px]">
              What services does Velammal Hospital provide?
            </AccordionTrigger>
            <AccordionContent className="bg-primary_blue text-white font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px] px-4 md:px-[37px] py-[14px] md:py-[18px] rounded-xl">
              Velammal Hospital offers a wide range of medical services including cardiology, neurology, orthopedics, oncology, urology, and many more specialties. The hospital also provides 24/7 emergency care, dialysis, organ transplantation, and intensive care services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="w-full h-auto px-4 md:px-[36px]">
            <AccordionTrigger className="md:text-center font-medium text-[16px] text-start md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px]">
              What services does Velammal Hospital provide?
            </AccordionTrigger>
            <AccordionContent className="bg-primary_blue text-white font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px] px-4 md:px-[37px] py-[14px] md:py-[18px] rounded-xl">
              Velammal Hospital offers a wide range of medical services including cardiology, neurology, orthopedics, oncology, urology, and many more specialties. The hospital also provides 24/7 emergency care, dialysis, organ transplantation, and intensive care services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="w-full h-auto px-4 md:px-[36px]">
            <AccordionTrigger className="md:text-center font-medium text-[16px] text-start md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px]">
              What services does Velammal Hospital provide?
            </AccordionTrigger>
            <AccordionContent className="bg-primary_blue text-white font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px] px-4 md:px-[37px] py-[14px] md:py-[18px] rounded-xl">
              Velammal Hospital offers a wide range of medical services including cardiology, neurology, orthopedics, oncology, urology, and many more specialties. The hospital also provides 24/7 emergency care, dialysis, organ transplantation, and intensive care services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="w-full h-auto px-4 md:px-[36px]">
            <AccordionTrigger className="md:text-center font-medium text-[16px] text-start md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px]">
              What services does Velammal Hospital provide?
            </AccordionTrigger>
            <AccordionContent className="bg-primary_blue text-white font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[27.9px] tracking-[0.27px] px-4 md:px-[37px] py-[14px] md:py-[18px] rounded-xl">
              Velammal Hospital offers a wide range of medical services including cardiology, neurology, orthopedics, oncology, urology, and many more specialties. The hospital also provides 24/7 emergency care, dialysis, organ transplantation, and intensive care services.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  
  export default AccordionDemo;
  