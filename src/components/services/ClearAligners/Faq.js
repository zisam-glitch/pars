import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(0);
  const faqsItems = [
    {
      id: 1,
      title: "",
      faqs: [
        {
          id: 1,
          ques: "How long do I have to wear clear aligners each day?",
          ans: "It's recommended to have a dental check-up every six months, although some people may require more frequent visits.",
        },
        {
          id: 2,
          ques: "What is the difference between a general dentist and a specialist?",
          ans: "A general dentist provides a wide range of dental services, while specialists like orthodontists or periodontists focus on specific areas of dentistry.",
        },
        {
          id: 3,
          ques: "Can general dentists perform cosmetic procedures?",
          ans: "Many general dentists offer basic cosmetic procedures like teeth whitening and dental veneers.",
        },
      ],
    },
  ];

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="mt-28">
      <div className="container mx-auto px-10 ">
        <h2 className="text-[#4f5859] text-4xl text-center font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="leading-8 text-gray-600 my-3 text-center max-w-[900px] mx-auto">
          Discover answers to common whitening questions. From treatment
          duration to aftercare tips, our FAQ section provides valuable guidance
          for a brighter, confident smile.
        </p>
        <div className="mt-10">
          {faqsItems.map((item, i) => {
            return (
              <div className="mb-10" key={i}>
                <h4 className="font-semibold text-2xl text-[#4f5859] mb-5">
                  {item.title}
                </h4>
                {item.faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    open={open === index + i}
                    icon={<Icon id={index + i} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(index + i)}
                      className="text-[#4f5859] text-md font-semibold"
                    >
                      {faq.ques}
                    </AccordionHeader>
                    <AccordionBody className="text-gray-600 text-base font-normal">
                      {faq.ans}
                    </AccordionBody>
                  </Accordion>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default Faq;
