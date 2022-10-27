import React from "react";

const Introduction = ({ className, photoUrl, title, body }) => {
  return (
    <div className={className ? `${className} introduction` : "introduction"}>
      <img className="introduction__photo" src={photoUrl} alt="introduction" />
      <div className="introduction__text-content">
        <h5 className="introduction__title">{title}</h5>
        <p className="introduction__body">{body}</p>
      </div>
    </div>
  );
};

export default Introduction;
