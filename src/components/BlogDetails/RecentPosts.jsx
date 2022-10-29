import React from "react";
import { Link } from "react-router-dom";
import dateNtoS from "../../tools/dateNtoS";
import MiniBlog from "./MiniBlog";

const RecentPosts = ({ className, data }) => {
  console.log(data);
  return (
    <div className={className ? `${className} recent-posts` : "recent-posts"}>
      {data?.map((item) => {
        const createdAt = dateNtoS(item.attributes.createdAt);
        return (
          <Link to={`/blogs/${item.id}`}>
            <MiniBlog
              key={item.id}
              photo={item.attributes.photo.data[0].attributes.url}
              title={item.attributes.Title}
              createdAt={createdAt}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default RecentPosts;
