import React, { useState, useContext, useCallback } from "react";
import { useNavigate, Link, NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";
import _ from "lodash";

const Header = () => {
  const navigate = useNavigate();

  //   const navList = _.map(HEADER_NAV_CONFIG, ({ label, path, child }) => (
  //     <HeaderItem label={label} path={path} child={child} key={label} />
  //   ));

  return (
    <>
      <nav>
        <span>
          {/* <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink> */}
          <Link to="/">Home</Link>
        </span>
        |
        <span>
          {/* <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Products
        </NavLink> */}
          <Link to="/products">Products</Link>
        </span>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
