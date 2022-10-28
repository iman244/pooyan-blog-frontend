import React from "react";
import Introduction from "./Introduction";

const Introductions = ({ className, data }) => {
  return (
    <div className={className ? `${className} introductions` : "introductions"}>
      <h4 className="introductions__title">about us</h4>
      <div className="introductions__list">
        {data?.map((introduction) => (
          <Introduction
            key={introduction.id}
            className={
              introduction.id % 2
                ? "introductions__item--row"
                : "introductions__item--dense"
            }
            photoUrl={
              process.env.REACT_APP_BACKEND +
              introduction.attributes.photo.data[0].attributes.url
            }
            title={introduction.attributes.Title}
            body={introduction.attributes.Body}
          />
        ))}
      </div>
    </div>
  );
};

export default Introductions;
