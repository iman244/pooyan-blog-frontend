import React from "react";
import { Link } from "react-router-dom";
import dateNtoS from "../../tools/dateNtoS";
import Information from "../Information";

const AbstractBlog = ({ className, data }) => {
  const createdAt = dateNtoS(data.attributes.createdAt);
  return (
    <div className={className ? `${className} blog-abstract` : "blog-abstract"}>
      <Link to={`/blogs/${data.id}`}>
        <img
          className="blog-abstract__photo"
          src={
            process.env.REACT_APP_BACKEND +
            data.attributes.photo.data[0].attributes.url
          }
          alt="blog"
        />
        <div className="blog-abstract__wrapper-content">
          <Information
            className="blog-abstract__information"
            createdAt={createdAt}
            category={data?.attributes.category}
          />
          <h4 className="blog-abstract__title">{data.attributes.Title}</h4>
          <p className="blog-abstract__body">
            {data.attributes.Body.substring(0, 200)}...
          </p>
          <Link className="blog-abstract__read-more" to={`/blogs/${data.id}`}>
            Continue Reading
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default AbstractBlog;
