import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = ({ redirectPage }) => {
  const navigate = useNavigate();
  const default_destination = "/";
  const destination = redirectPage ? redirectPage : default_destination;

  useEffect(() => {
    setTimeout(() => navigate(destination), 2000);
  }, []);

  return <div>PageNotFound</div>;
};

export default PageNotFound;
