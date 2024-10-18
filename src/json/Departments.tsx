import breast_endocrine from "@/public/breast_endocrine_icon.svg"
import { StaticImageData } from "next/image";

type Department = {
    name: string;
    icon: StaticImageData; // Assuming you're using Next.js StaticImageData type
  };
  
  // Departments data
  const departments: Department[] = [
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
    { name: "Breast & Endocrine", icon: breast_endocrine },
  ];
  

export default departments;