import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const BLOGS = gql`
  query getBlog {
    blogs {
      data {
        id
        attributes {
          Title
          Body
        }
      }
    }
  }
`;

const Blogs = () => {
  const { data } = useQuery(BLOGS);
  return (
    <div>
      <div>page name: Blogs</div>
      <div>
        {data?.blogs.data.map((blog) => {
          const { Title, Body } = blog.attributes;
          return (
            <div key={blog.id} className="blog-abstract">
              <h4 className="blog-abstract__title">{Title}</h4>
              <p className="blog-abstract__body">{Body.substring(0, 200)}...</p>
              <Link
                className="blog-abstract__readMore"
                to={`/blogs/${blog.id}`}
              >
                Read more
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
