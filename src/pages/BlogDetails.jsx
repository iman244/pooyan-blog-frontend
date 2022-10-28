import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import PageNotFound from "./PageNotFound";
import QueryModule from "../components/QueryModule";
import Information from "../components/Information";
import dateNtoS from "../tools/dateNtoS";
import Categories from "../components/Categories";
import RecentPosts from "../components/BlogDetails/RecentPosts";

const BLOG = gql`
  query getBlog($id: ID!) {
    blog(id: $id) {
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
    blogs(pagination: { limit: 3 }) {
      data {
        id
        attributes {
          Title
          createdAt
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
  }
`;

const BlogDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(BLOG, { variables: { id: id } });
  const createdAt = dateNtoS(data?.blog.data.attributes.createdAt);
  let navigate = useNavigate();

  return (
    <QueryModule loading={loading} error={error}>
      <div>
        <span className="" onClick={() => navigate("/blogs?category=")}>
          &lt; all posts
        </span>
        {data?.blog.data === null ? (
          <PageNotFound redirectPage="/blogs" />
        ) : (
          <div className="blog">
            <Information
              className="blog__information"
              createdAt={createdAt}
              category={data?.blog.data.attributes.category}
            />
            <img
              className="blog__photo"
              src={
                process.env.REACT_APP_BACKEND +
                data?.blog.data.attributes.photo.data[0].attributes.url
              }
              alt="blog"
            />
            <div className="blog__wrapper-content">
              <h2 className="blog__title">
                {data?.blog.data.attributes.Title}
              </h2>
              <p className="blog__body">{data?.blog.data.attributes.Body}</p>
            </div>
          </div>
        )}
        <Categories data={data?.categories.data} />
        <RecentPosts data={data?.blogs.data} />
      </div>
    </QueryModule>
  );
};

export default BlogDetails;
