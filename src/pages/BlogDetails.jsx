import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import PageNotFound from "./PageNotFound";

const BLOG = gql`
  query getBlog($id: ID!) {
    blog(id: $id) {
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

const BlogDetails = () => {
  const { id } = useParams();
  const { data } = useQuery(BLOG, { variables: { id: id } });
  return (
    <div>
      <div>page name: BlogDetails</div>
      {data ? (
        data.blog.data === null ? (
          <PageNotFound redirectPage="/blogs" />
        ) : (
          <div className="blog">
            <h2 className="blog__title">{data.blog.data.attributes.Title}</h2>
            <p className="blog__body">{data.blog.data.attributes.Body}</p>
          </div>
        )
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default BlogDetails;
