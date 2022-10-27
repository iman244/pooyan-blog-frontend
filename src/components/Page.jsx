import React from "react";
import Nav from "./Nav/Nav";

const Page = ({ element }) => {
  return (
    <div className="page">
      <Nav className="page__nav" />
      <div className="page__content">{element}</div>
    </div>
  );
};

export default Page;
