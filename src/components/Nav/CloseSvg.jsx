import React from "react";

const CloseSvg = ({ className, onClick }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="40px"
      height="40px"
      data-ux="CloseIcon"
      data-edit-interactive="true"
      data-close="true"
      onClick={onClick}
      className={
        className
          ? `${className} x-el x-el-svg c1-1 c1-2 c1-36 c1-1k c1-2d c1-3a c1-3b c1-3c c1-3d c1-1v c1-6h c1-6i c1-4n c1-6j c1-6k c1-6l c1-b c1-37 c1-6m c1-6n c1-6o c1-6p`
          : "x-el x-el-svg c1-1 c1-2 c1-36 c1-1k c1-2d c1-3a c1-3b c1-3c c1-3d c1-1v c1-6h c1-6i c1-4n c1-6j c1-6k c1-6l c1-b c1-37 c1-6m c1-6n c1-6o c1-6p"
      }
    >
      <path
        fillRule="evenodd"
        d="M17.999 4l-6.293 6.293L5.413 4 4 5.414l6.292 6.293L4 18l1.413 1.414 6.293-6.292 6.293 6.292L19.414 18l-6.294-6.293 6.294-6.293z"
      ></path>
    </svg>
  );
};

export default CloseSvg;
