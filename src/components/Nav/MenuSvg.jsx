import React from "react";

const MenuSvg = ({ className, onClick }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="40px"
      height="40px"
      data-ux="IconHamburger"
      onClick={onClick}
      className={
        className
          ? `${className} x-el x-el-svg c2-1 c2-2 c2-1m c2-r c2-1n c2-17 c2-18 c2-19 c2-1a c2-3 c2-4 c2-5 c2-6 c2-7 c2-8`
          : "x-el x-el-svg c2-1 c2-2 c2-1m c2-r c2-1n c2-17 c2-18 c2-19 c2-1a c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"
      }
    >
      <g>
        <path fillRule="evenodd" d="M4 8h16V6H4z"></path>
        <path fillRule="evenodd" d="M4 13.096h16v-2.001H4z"></path>
        <path fillRule="evenodd" d="M4 18.346h16v-2H4z"></path>
      </g>
    </svg>
  );
};

export default MenuSvg;
