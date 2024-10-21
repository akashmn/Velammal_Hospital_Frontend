import { StaticImageData } from "next/image";

import cardiology from "@/public/news_article_cardiology.svg";
import nuerology from "@/public/news_article_neurology.svg";
import orthopaedics from "@/public/news_article_orthopaedics.svg";
import oncology from "@/public/news_article_oncology.svg";
import gynaecology from "@/public/news_article_gynaecology.svg";
import paediatrics from "@/public/news_article_paediatrics.svg";
import urology from "@/public/news_article_urology.svg";
import advanced_icu from "@/public/news_article_advancedICU.svg";

export type NewsArticle = {
    id: number;
    tag: string;
    title: string;
    description: string;
    image: StaticImageData;
  };


export const newsArticlesData: NewsArticle[] = [
    {
      id: 1,
      tag: "Cardiology",
      title: "Advanced Heart Care for Over 1 Lakh Patients",
      description: "Cutting-edge treatments and successful outcomes from the cardiology department",
      image: cardiology,
    },
    {
      id: 2,
      tag: "Neurology",
      title: "Pioneering Stroke Treatment and Neurosurgical Excellence",
      description: "Feature breakthroughs in stroke care, brain surgery, and other neurological treatments",
      image: nuerology,
    },
    {
      id: 3,
      tag: "Orthopaedics",
      title: "Revolutionising Joint Replacements and Care",
      description: "The orthopaedics department has successfully performed thousands of joint replacements",
      image: orthopaedics,
    },
    {
      id: 4,
      tag: "Oncology ",
      title: "Leading Cancer Care in South Tamil Nadu",
      description: "Comprehensive oncology services, including chemotherapy, radiation thera...",
      image: oncology,
    },
    {
        id: 5,
        tag: "Gynaecology ",
        title: "Empowering Women’s Health with World-Class Care",
        description: "Celebrate the department’s role in providing exceptional maternity care",
        image: gynaecology,
      },
      {
        id: 6,
        tag: "Paediatrics",
        title: "Neo natal Care for the Next Generation",
        description: "Explore the paediatrics department’s work in neonatal care, paediatric surgeries",
        image: paediatrics,
      },
      {
        id: 7,
        tag: "Urology ",
        title: "Comprehensive Kidney and Urological Care",
        description: "Our urology services, including kidney transplants, prostate treatments",
        image: urology,
      },
      {
        id: 8,
        tag: "Advanced ICU",
        title: "Critical Care at Velammal: Saving Lives 24/7",
        description: "Velammal’s critical care units, showcasing their ability to handle emergencies, trauma",
        image: advanced_icu,
      },
  ];
  
