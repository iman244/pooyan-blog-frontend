import React from "react";
import Information from "../Information";

const Blog = ({ className, data, createdAt }) => {
  return (
    <main className={className ? `${className} blog` : "blog"}>
      <div className="blog__information-wrapper">
        <h2 className="blog__title">{data?.attributes.Title}</h2>
        <Information
          className="blog__information"
          createdAt={createdAt}
          category={data?.attributes.category}
        />
      </div>
      <img
        className="blog__photo"
        src={
          process.env.REACT_APP_BACKEND +
          data?.attributes.photo.data[0].attributes.url
        }
        alt="blog"
      />

      <div className="blog__body">{data?.attributes.Body}</div>
    </main>
  );
};

export default Blog;
