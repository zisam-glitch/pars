import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
      allContentfulGlobal {
        nodes {
          phone
          email

          address
        }
      }
    }
  `);

  const contactData = data?.allContentfulGlobal?.nodes[0];

  return (
    <section className="mt-20 container px-10 mx-auto text-center">
      <p className="text-secondary my-2">{contactData?.address}</p>
      <a
        className="text-secondary my-2 block"
        href={`mailto:${contactData?.email}`}
      >
        {contactData?.email}
      </a>
      <a className="text-secondary my-2" href={`tel:${contactData?.phone}`}>
        {contactData?.phone}
      </a>
    </section>
  );
};

export default ContactInfo;
