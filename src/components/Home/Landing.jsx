import React from "react";

const Landing = ({ className, data }) => {
  return (
    <div className={className ? `${className} landing` : "landing"}>
      <img
        className="landing__photo"
        src={
          process.env.REACT_APP_BACKEND +
          data?.attributes.photo.data[0].attributes.url
        }
        alt="landingPhoto"
      />
      <div className="landing__content">{data?.attributes.Body}</div>
    </div>
  );
};

export default Landing;
