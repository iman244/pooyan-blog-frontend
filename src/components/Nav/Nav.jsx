import React, { useEffect, useState } from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

// components
import MenuSvg from "./MenuSvg";
import SidebarMenu from "./SidebarMenu";

const ASSETS = gql`
  {
    siteAsset {
      data {
        attributes {
          name
          logo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const navItems = [
  { id: 1, to: "blogs", text: "blogs" },
  { id: 2, to: "contact", text: "contact" },
];

const Nav = ({ className }) => {
  const { data } = useQuery(ASSETS);
  const { pathname } = useLocation();

  const [scroll, setScroll] = useState(0);
  const [viewPortSizeSmall, setViewPortSizeSmall] = useState(true);
  const [sidebarMenuShow, setSidebarMenuShow] = useState(false);

  const handleView = () => {
    if (window.innerWidth <= 1024) {
      setViewPortSizeSmall(true);
    } else {
      setViewPortSizeSmall(false);
    }
  };
  window.addEventListener("resize", handleView);
  document.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  useEffect(() => {
    handleView();
  }, []);

  return (
    <>
      <nav
        data-scroll={scroll}
        data-pathname={pathname}
        className={className ? `${className} nav` : "nav"}
      >
        <div className="nav__wrapper">
          <Link className="nav__link-home" to="/">
            {data ? (
              <img
                data-scroll={scroll}
                className="nav__logo"
                src={
                  process.env.REACT_APP_BACKEND +
                  data?.siteAsset.data.attributes.logo.data[0].attributes.url
                }
                alt="logo"
              />
            ) : (
              <h2>SiteName</h2>
            )}
          </Link>
          {viewPortSizeSmall ? (
            <MenuSvg
              className="nav__menu-btn"
              onClick={() => setSidebarMenuShow(!sidebarMenuShow)}
            />
          ) : (
            <div className="nav__items-wrapper">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className={
                    item.to === pathname ? "nav__item--active" : "nav__item"
                  }
                >
                  {item.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
      <SidebarMenu
        // className="nav__sidebarMenu"
        navItems={navItems}
        show={sidebarMenuShow}
        setShow={setSidebarMenuShow}
      />
    </>
  );
};

export default Nav;
