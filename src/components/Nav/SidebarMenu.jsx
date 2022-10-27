import React from "react";
import { Link } from "react-router-dom";
import CloseSvg from "./CloseSvg";

const SidebarMenu = ({ show, setShow, className, navItems }) => {
  const menuItems = [
    {
      id: 0,
      to: "/",
      text: "home",
    },
    ...navItems,
  ];
  return (
    <div
      style={{
        width: `${show ? "100%" : "0"}`,
        opacity: `${show ? "1" : "0"}`,
      }}
      className={className ? `${className} sidebarNav` : "sidebarNav"}
      onClick={() => {
        setShow(!show);
      }}
    >
      <div className="sidebarNav__wrapper">
        <CloseSvg className="sidebarNav__close-btn" />
        <div className="sidebarNav__items">
          {menuItems.map((item) => (
            <Link className="sidebarNav__item" key={item.id} to={item.to}>
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
