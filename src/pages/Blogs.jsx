import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import QueryModule from "../components/QueryModule";
import SocialMedia from "../components/SocialMedia";
import AbstractBlog from "../components/Blogs/AbstractBlog";
import Categories from "../components/Categories";
import { useSearchParams } from "react-router-dom";

const BLOGS = gql`
  query getBlogs($category: String) {
    blogs(filters: { category: { contains: $category } }) {
      data {
        id
        attributes {
          createdAt
          category
          Title
          Body
          photo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
    socialMedias {
      data {
        id
        attributes {
          link
          icon {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const Blogs = () => {
  let [searchParams] = useSearchParams();
  let categorySearch = searchParams.get("category")
    ? searchParams.get("category")
    : "";
  const { data, loading, error } = useQuery(BLOGS, {
    variables: { category: categorySearch },
  });
  return (
    <QueryModule loading={loading} error={error}>
      <div className="blogs">
        <Categories
          className="blogs__categories"
          data={data?.categories.data}
        />
        <div className="blogs__list">
          {data?.blogs.data.map((blog) => (
            <AbstractBlog key={blog.id} className="blogs__item" data={blog} />
          ))}
        </div>
        <SocialMedia
          className="blogs__social-media"
          data={data?.socialMedias.data}
        />
      </div>
    </QueryModule>
  );
};

export default Blogs;
