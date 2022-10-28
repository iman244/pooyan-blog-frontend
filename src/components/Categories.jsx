import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = ({ className, data }) => {
  let navigate = useNavigate();
  return (
    <ul className={className ? `${className} categories` : "categories"}>
      <li
        className="categories__item"
        onClick={() => navigate("/blogs?category=")}
      >
        all posts
      </li>
      {data?.map((item) => (
        <li
          key={item.id}
          className="categories__item"
          onClick={() => navigate(`/blogs?category=${item.attributes.name}`)}
        >
          {item.attributes.name}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
