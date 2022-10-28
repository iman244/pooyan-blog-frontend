import React from "react";

const FirstParagraph = ({ className, data }) => {
  return (
    <div
      className={className ? `${className} first-paragraph` : "first-paragraph"}
    >
      <h5 className="first-paragraph__title">{data?.attributes.Title}</h5>
      <p className="first-paragraph__body">{data?.attributes.Body}</p>
    </div>
  );
};

export default FirstParagraph;
