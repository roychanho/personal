import React, { useState, useContext, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import classNames from "classnames";
import _ from "lodash";

const Header = () => {
  const navigate = useNavigate();

  //   const navList = _.map(HEADER_NAV_CONFIG, ({ label, path, child }) => (
  //     <HeaderItem label={label} path={path} child={child} key={label} />
  //   ));

  return (
    <nav>
      <span>
        <Link to="/">Home</Link>
      </span>
      |
      <span>
        <Link to="/products">Products</Link>
      </span>
    </nav>
  );
};

export default Header;
