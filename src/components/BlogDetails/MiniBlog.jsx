import React from "react";

const MiniBlog = ({ className, photo, title, createdAt }) => {
  return (
    <div className={className ? `${className} miniBlog` : "miniBlog"}>
      <img src={process.env.REACT_APP_BACKEND + photo} alt="blog" />
      <h4>{title}</h4>
      <span>{createdAt}</span>
    </div>
  );
};

export default MiniBlog;
