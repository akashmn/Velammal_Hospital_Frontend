// SVGs for doctors
import dr_ramprasath from "@/public/dr_ramaprasath.svg";
import dr_kavitha from "@/public/dr_kavitha.svg";
import dr_ganesh_kumar from "@/public/dr_ganesh_kumar.svg";
import dr_suganya from "@/public/dr_suganya.svg";

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
];

export default doctors;
