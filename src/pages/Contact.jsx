import React from "react";
import { useQuery, gql } from "@apollo/client";

const CONTACT = gql`
  {
    contactMe {
      data {
        id
        attributes {
          email
        }
      }
    }
  }
`;

const Contact = () => {
  const { data } = useQuery(CONTACT);

  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h2 className="contact__header">Contact me</h2>
        <div className="contact__email">
          <span className="contact__tag">E-mail: </span>
          <span className="contact__tag-value">
            {data?.contactMe.data.attributes.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
