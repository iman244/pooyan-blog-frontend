import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import PageNotFound from "./PageNotFound";
import QueryModule from "../components/QueryModule";
import dateNtoS from "../tools/dateNtoS";
import Categories from "../components/Categories";
import RecentPosts from "../components/BlogDetails/RecentPosts";
import Blog from "../components/BlogDetails/Blog";
import SocialMedia from "../components/SocialMedia";

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
    blogs(pagination: { limit: 3 }, filters: { id: { not: { eq: $id } } }) {
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

const BlogDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(BLOG, { variables: { id: id } });
  const createdAt = dateNtoS(data?.blog.data.attributes.createdAt);
  let navigate = useNavigate();

  return (
    <QueryModule loading={loading} error={error}>
      <div className="blog-details">
        <div className="blog-details__wrapper">
          <div className="blog-details__main">
            <span
              className="blog-details__control"
              onClick={() => navigate("/blogs")}
            >
              &lt; all posts
            </span>
            {data?.blog.data === null ? (
              <PageNotFound redirectPage="/blogs" />
            ) : (
              <Blog
                className="blog-details__blog"
                data={data?.blog.data}
                createdAt={createdAt}
              />
            )}
          </div>
          <div className="blog-details__secondary">
            <div className="blog-details__categories-wrapper">
              <h5 className="blog-details__categories-header">categories</h5>
              <Categories
                className="blog-details__categories"
                data={data?.categories.data}
              />
            </div>
            <div className="blog-details__recent-posts-wrapper">
              <h5 className="blog-details__recent-posts-header">
                recent posts
              </h5>
              <RecentPosts
                className="blog-details__recent-posts"
                data={data?.blogs.data}
              />
            </div>
          </div>
        </div>
        <SocialMedia
          className="blog-details__social-media"
          data={data?.socialMedias.data}
        />
      </div>
    </QueryModule>
  );
};

export default BlogDetails;
