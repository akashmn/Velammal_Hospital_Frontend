import { StaticImageData } from "next/image";

// Importing department icons
import breast_endocrine from "@/public/dep_breast_endocrine.svg";
import cardiology from "@/public/dep_cardiology.svg";
import dental from "@/public/dep_dental.svg";
import dermatology from "@/public/dep_dermatology.svg";
import thoracic from "@/public/dep_cardio_thoracic_surgery.svg";
import ent from "@/public/dep_ent.svg";
import gen_med from "@/public/dep_general_medicine.svg";
import gen_surgery from "@/public/dep_general_surgery.svg";
import med_endo from "@/public/dep_medical_endocrinology.svg";
import gastro from "@/public/dep_Gastroenterology.svg";
import med_oncology from "@/public/dep_medical_onco.svg";
import nephro from "@/public/dep_Nephrology.svg";
import neuro from "@/public/dep_Neuro_Surgery.svg";
import obstetrics_gynecology from "@/public/dep_Obstetrics_Gynecology.svg";
import infectious from "@/public/dep_Infectious_Disease.svg";
import oncology from "@/public/dep_Oncology.svg";
import ophthalmology from "@/public/dep_Ophthalmology.svg";
import orthopedics from "@/public/dep_Orthopedics.svg";
import pediatrics from "@/public/dep_Pediatrics.svg";
import pediatrics_surgery from "@/public/dep_pediatrics_sur.svg";
import physiotherapy from "@/public/dep_Physiotherapy.svg";
import plastic from "@/public/dep_Plastic_Surgery.svg";
import facial_cosmetic from "@/public/dep_Facial_Cosmetic_Hair_Transplant.svg";
import psychiatry from "@/public/dep_Psychiatry.svg";
import reproductive from "@/public/dep_reproductive.svg";
import respiratory from "@/public/dep_resp.svg";
import rheumatology from "@/public/dep_Rheumatology.svg";
import surgical_gastro from "@/public/dep_Surg_Gastro.svg";
import urology from "@/public/dep_Urology.svg";
import vascular from "@/public/dep_Vascular_Surgery.svg";






type Department = {
    name: string;
    icon: StaticImageData; // Assuming you're using Next.js StaticImageData type
  };
  
  // Departments data
  const departments: Department[] = [
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Cardiology", icon: cardiology },
    { name: "Dental", icon: dental },
    { name: "Dermatology", icon: dermatology },
    { name: "Cardio Thoracic Surgery", icon: thoracic },
    { name: "Breast & Endocrine", icon: ent },
    { name: "General Medicines", icon: gen_med },
    { name: "General Surgery", icon: gen_surgery },
    { name: "Medical Endocrinology", icon: med_endo },
    { name: "Gastroenterology", icon: gastro },
    { name: "Medical Oncology", icon: med_oncology },
    { name: "Nephrology", icon: nephro },
    {name: "Neuro Surgery", icon: neuro },
    {name: "Obstetrics & Gynecology", icon: obstetrics_gynecology },
    {name: "Infectious & Disease", icon: infectious },
    {name: "Oncology", icon: oncology },
    {name: "Ophthalmology", icon: ophthalmology},
    {name: "Orthopedics", icon: orthopedics },
    {name: "Pediatrics", icon: pediatrics },
    {name: "Pediatrics Surgery", icon: pediatrics_surgery },
    {name: "Physiotherapy", icon: physiotherapy },
    {name: "Plastic Surgery", icon: plastic },
    {name: "Facial Cosmetic & Hair Transplant", icon: facial_cosmetic },
    {name: "Psychiatry", icon: psychiatry },
    {name: "Reproductive Medicine", icon: reproductive },
    {name: "Respiratory Medicine", icon: respiratory },
    {name: "Rheumatology", icon: rheumatology },
    {name: "Surgical Gastroenterology", icon: surgical_gastro},
    {name: "Urology", icon: urology },
    {name: "Vascular Surgery", icon: vascular },
  ];
  

export default departments;