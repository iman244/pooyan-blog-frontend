import React from "react";
import { useQuery, gql } from "@apollo/client";
import QueryModule from "../components/QueryModule";

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
  const { data, loading, error } = useQuery(CONTACT);

  return (
    <QueryModule loading={loading} error={error}>
      <div className="contact">
        <div className="contact__wrapper">
          <h2 className="contact__header">Contact me</h2>
          <div className="contact__email">
            <span className="contact__tag">E-mail: </span>
            <a
              href={`mailto:${data?.contactMe.data.attributes.email}`}
              className="contact__tag-value"
            >
              {data?.contactMe.data.attributes.email}
            </a>
          </div>
        </div>
      </div>
    </QueryModule>
  );
};

export default Contact;
