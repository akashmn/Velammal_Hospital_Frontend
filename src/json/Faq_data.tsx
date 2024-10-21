export type FaqItem = {
    id: string;
    question: string;
    answer: string;
  };


const faqs: FaqItem [] = [
    {
      id: "item-1",
      question: "What services does Velammal Hospital provide?",
      answer:
        "Velammal Hospital offers a wide range of medical services including cardiology, neurology, orthopedics, oncology, urology, and many more specialties. The hospital also provides 24/7 emergency care, dialysis, organ transplantation, and intensive care services.",
    },
    // You can add more FAQ items here
    {
      id: "item-2",
      question: "How can I book an appointment?",
      answer:
        "Appointments can be booked through our online portal, by calling our help desk, or by visiting the hospital directly.",
    },
    {
      id: "item-3",
      question: "What are the visiting hours?",
      answer:
        "Our visiting hours are from 10:00 AM to 8:00 PM. Special arrangements can be made for critical care patients.",
    },
    {
      id: "item-4",
      question: "Does the hospital offer emergency services?",
      answer:
        "Yes, Velammal Hospital provides 24/7 emergency services with highly trained staff and advanced medical equipment.",
    },
  ];

export default faqs;