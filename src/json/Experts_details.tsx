// SVGs for doctors
import dr_ramprasath from "@/public/dr_ramaprasath.svg";
import dr_kavitha from "@/public/dr_kavitha.svg";
import dr_ganesh_kumar from "@/public/dr_ganesh_kumar.svg";
import dr_suganya from "@/public/dr_suganya.svg";
import Dr_Kavitha from "@/public/doctors/1.svg";
import Dr_Narendharan from "@/public/doctors/2.svg";
import Dr_P_Prem_Ananth from "@/public/doctors/3.svg";
import Dr_S_Venkatesh from "@/public/doctors/4.svg";
import Dr_M_S_P_S_RAJAVEL from "@/public/doctors/5.svg";

interface Doctor {
  name: string;
  specialization: string;
  type: string;
  image: typeof dr_ramprasath;
}


const doctors: Doctor[] = [
  {
    name: "Dr. Ramprasath",
    specialization: "Senior Consultant",
    type: "Cardiothoracic Surgeon",
    image: dr_ramprasath,
  },
  {
    name: "Dr. Kavitha",
    specialization: "Senior Consultant",
    type: "Cardiothoracic Surgeon",
    image: dr_kavitha,
  },
  {
    name: "Dr. Ganesh Kumar",
    specialization: "Senior Consultant",
    type: "Cardiothoracic Surgeon",
    image: dr_ganesh_kumar,
  },
  {
    name: "Dr. Suganya",
    specialization: "Senior Consultant",
    type: "Cardiothoracic Surgeon",
    image: dr_suganya,
  },
  {
    name: "Dr. Kavitha",
    specialization: "Senior Consultant",
    type: "Neurologist",
    image: Dr_Kavitha,
  },
  {
    name: "Dr.Narendharan ",
    specialization: "Senior Consultant",
    type: "medical gastroenterology",
    image: Dr_Narendharan,
  },
  {
    name: "Dr.P.Prem Ananth",
    specialization: "Senior Consultant",
    type: "Interventional Pulmonologist",
    image: Dr_P_Prem_Ananth,
  },
  {
    name: "Dr. S. Venkatesh",
    specialization: "Senior Consultant",
    type: "General surgeon",
    image: Dr_S_Venkatesh,
  },
  {
    name: "Dr. M.S.P.S. RAJAVEL",
    specialization: "Senior Consultant ENT, Head",
    type: "Neck and Skull base Surgeon",
    image: Dr_M_S_P_S_RAJAVEL,
  },
];

export default doctors;
