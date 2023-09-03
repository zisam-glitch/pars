import React from "react";
import ClearAlignersBaner from "./ClearAlignersBaner";
import ClrarContent from "./ClrarContent";
import Faq from "./Faq";
import ContactInfo from "./ContactInfo";

const ClearAligners = () => {
  return (
    <>
      <ClearAlignersBaner />
      <ClrarContent />
      {/* <Faq /> */}
      <section className="headclear max-w-5xl m-auto py-12">
      <div className="tab1 py-6">
        <h1 className="text-3xl	py-4">Conclusion</h1>
        <p>
          General Dentistry is an integral part of maintaining your overall
          health. With a focus on preventative care, diagnosis, and treatment,
          it serves as your first line of defense against oral health issues.
        </p>
      </div>
      </section>
      <ContactInfo />
    </>
  );
};

export default ClearAligners;
