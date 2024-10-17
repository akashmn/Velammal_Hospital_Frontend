import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import Image from 'next/image'
import underline from '@/public/faq_underline.svg'
  
  export function AccordionDemo() {
    return (
      <div className="flex flex-col items-center justify-center py-[70px] gap-[54px]">
        <div className="flex flex-col items-center justify-center text-center gap-[20px]">
            <div className="flex flex-col items-center justify-center">
                <p className="text-dark_text_blue text-center font-[600] text-[42px] leading-[52.5px] capitalize">Frequently Ask Question</p>
                <Image src={underline} alt="underline"></Image>
            </div>
            <p className="text-body_text_white text-center font-[500] text-[20px] leading-[31px] tracking-[0.3px]">Quality Care Explained: FAQs About Our Standards and Services</p>
        </div>
        <Accordion 
            type="single" 
            collapsible 
            className="w-[630px] flex flex-col items-center justify-center gap-[28px]">
            <AccordionItem 
                value="item-1"
                className="w-full h-auto px-[36px]">
                <AccordionTrigger className="text-center font-[500] text-[18px] leading-[27.9px] tracking-[0.27px]">What services does Velammal Hospital provide?</AccordionTrigger>
                <AccordionContent 
                    className="bg-primary_blue text-white font-[400] text-[18px] leading-[27.9px] tracking-[0.27px] px-[37px] py-[18px] rounded-xl">
                    Velammal Hospital offers a wide range of medical services including cardiology, neurology, orthopedics, oncology, urology, and many more specialties. The hospital also provides 24/7 emergency care, dialysis, organ transplantation, and intensive care services.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem 
                value="item-2"
                className="w-full h-auto px-[36px]">
                <AccordionTrigger className="text-center font-[500] text-[18px] leading-[27.9px] tracking-[0.27px]">What services does Velammal Hospital provide?</AccordionTrigger>
                <AccordionContent 
                    className="bg-primary_blue text-white font-[400] text-[18px] leading-[27.9px] tracking-[0.27px] px-[37px] py-[18px] rounded-xl">
                    Velammal Hospital offers a wide range of medical services including cardiology, neurology, orthopedics, oncology, urology, and many more specialties. The hospital also provides 24/7 emergency care, dialysis, organ transplantation, and intensive care services.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem 
                value="item-3"
                className="w-full h-auto px-[36px]">
                <AccordionTrigger className="text-center font-[500] text-[18px] leading-[27.9px] tracking-[0.27px]">What services does Velammal Hospital provide?</AccordionTrigger>
                <AccordionContent 
                    className="bg-primary_blue text-white font-[400] text-[18px] leading-[27.9px] tracking-[0.27px] px-[37px] py-[18px] rounded-xl">
                    Velammal Hospital offers a wide range of medical services including cardiology, neurology, orthopedics, oncology, urology, and many more specialties. The hospital also provides 24/7 emergency care, dialysis, organ transplantation, and intensive care services.
                </AccordionContent>
            </AccordionItem>

        </Accordion>
      </div>
    )
  }
  