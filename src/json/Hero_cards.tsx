import consult_online from '@/public/hero_consult_online.svg'
import health_check from '@/public/hero_health_check.svg'
import buy_medicines from '@/public/hero_buy_medicines.svg'
import health_records from '@/public/hero_health_record.svg'
import book_appointment from '@/public/hero_book_appointment.svg'

import { StaticImageData } from 'next/image'

type CardItem = {
    title: string;
    icon: StaticImageData; // Assuming the image source is a string, update based on how you're importing icons
    background: string;
    text?: string;
};

const cardItems: CardItem[] = [
    {
      title: "Consult Online",
      icon: consult_online, // replace with actual path
      background: "bg-white", // Tailwind class for background color
    },
    {
        title: "Health Check-up",
        icon: health_check, // replace with actual path
        background: "bg-white", // Tailwind class for background color
    },
    {
        title: "Buy Medicines",
        icon: buy_medicines, // replace with actual path
        background: "bg-white", // Tailwind class for background color
      },

      {
        title: "Health Records",
        icon: health_records, // replace with actual path
        background: "bg-white", // Tailwind class for background color
      },

      {
        title: "Book Appointment",
        icon: book_appointment, // replace with actual path
        background: "bg-[#11468D;]", // Tailwind class for background color
        text: "text-white",
      },

  ];

export default cardItems;