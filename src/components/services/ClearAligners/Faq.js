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
      title: "BEAM Whitening Kits & Top-ups",
      faqs: [
        {
          id: 1,
          ques: "How do whitening strips differ from trays (kits)?",
          ans: "As well as being more cost-effective than trays, WhiteWash Professional Whitening Strips are more comfortable, less bulky, and allow you to whiten on the go. Whats more, each strip already contains the optimum amount of whitening gel so its less hassle for you and helps to ensure you achieve an even white smile.",
        },
        {
          id: 2,
          ques: "Will I get even results?",
          ans: "Each strip contains the exact amount of whitening gel to effectively whiten your teeth. Each strip should be positioned across the teeth and gently pressed into place, aiming to get maximum contact with all of your visible teeth. This will ensure even spread of the whitening gel.",
        },
        {
          id: 3,
          ques: "If white spots appear will they go or are they permanent?",
          ans: "No. These white spots are temporary; they are not harmful and will disappear within 24 hours.",
        },
        {
          id: 4,
          ques: "What If I experience tooth sensitivity or gum irritation?",
          ans: "It is not uncommon to experience tooth sensitivity and / or gum irritation whilst whitening your teeth. This is temporary and NOT harmful. To alleviate symptoms it may be sensible to whiten your teeth on alternate days, until you have used all of the strips. If the problem persists, discontinue use and consult your dentist.",
        },
        {
          id: 5,
          ques: "Why can't I buy teeth whitening gel online?",
          ans: "Each strip contains the exact amount of whitening gel to effectively whiten your teeth. Each strip should be positioned across the teeth and gently pressed into place, aiming to get maximum contact with all of your visible teeth. This will ensure even spread of the whitening gel.",
        },
      ],
    }
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
