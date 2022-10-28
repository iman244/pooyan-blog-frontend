import React from "react";

const Information = ({ className, createdAt, category }) => {
  return (
    <div className={className ? `${className} information` : "information"}>
      <span className="information__createdAt">{createdAt}</span>
      <span className="information__hr">|</span>
      <span className="information__category">{category}</span>
    </div>
  );
};

export default Information;
