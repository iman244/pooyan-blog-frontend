import React from "react";
import { HashLoader } from "react-spinners";

const QueryModule = ({ loading, error, children }) => {
  return (
    <>
      <div
        className="QueryModule"
        style={{
          opacity: `${loading ? "1" : "0"}`,
          zIndex: `${loading ? "9999" : "-9999"}`,
        }}
      >
        <HashLoader color="#36d7b7" />
      </div>
      {children}
    </>
  );
};

export default QueryModule;
