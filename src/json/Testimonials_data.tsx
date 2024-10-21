import { StaticImageData } from "next/image";
import vidya from "@/public/testimonial_vidya_image.svg"
import venugopal from "@/public/testimonial_venogopal_image.svg"
import kavya from "@/public/testimonial_kavya_image.svg"


interface Testimonial {
    name: string;
    image: StaticImageData;
    review: string;
  }
  
  // Create the testimonials data with the correct type
  const testimonialsData: Testimonial[] = [
    {
      name: "Vidya",
      image: vidya, // Make sure 'vidya' is a valid image import
      review:
        "Velammal Hospital has saved the life of a 1-year-old girl from Bangalore. Referred with breathing difficulties, experts at our ENT department swiftly diagnosed a groundnut blocking her airway. Thanks to the expertise of ENT surgeon Dr. Rajavel",
    },
    {
      name: "Venugopal",
      image: venugopal,
      review:
        "Thanks to the remarkable multidisciplinary team at Velammal Hospital—including general surgeons, lab professionals, and plastic surgeons—this seemingly impossible situation was transformed into a success story, making Mr. Venugopal's leg fully functional.",
    },
    {
      name: "Kavya",
      image: kavya,
      review:
        "Breast milk, often referred to as liquid gold, is essential for every baby's health. Thanks to the awareness session at Velammal, Mrs. Kalai Selvi committed to donating milk and helping countless babies without affecting her own baby's nutrition.",
    },
  ];
  
  export default testimonialsData;
  