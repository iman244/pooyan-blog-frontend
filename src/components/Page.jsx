import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav/Nav";

const Page = ({ element }) => {
  const { pathname } = useLocation();
  return (
    <div className="page">
      <Nav className="page__nav" />
      <div className="page__content" data-pathname={pathname}>
        {element}
      </div>
    </div>
  );
};

export default Page;
