import React from "react";

const MiniBlog = ({ className, photo, title, createdAt }) => {
  return (
    <div className={className ? `${className} mini-blog` : "mini-blog"}>
      <img
        className="mini-blog__photo"
        src={process.env.REACT_APP_BACKEND + photo}
        alt="blog"
      />
      <div className="mini-blog__wrapper-content">
        <h4 className="mini-blog__title">{title}</h4>
        <span className="mini-blog__createdAt">{createdAt}</span>
      </div>
    </div>
  );
};

export default MiniBlog;
