import React, { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import _ from "lodash";

const Header = () => {
  const navigate = useNavigate();

//   const navList = _.map(HEADER_NAV_CONFIG, ({ label, path, child }) => (
//     <HeaderItem label={label} path={path} child={child} key={label} />
//   ));

  return (
    <div
      id="Header"
      className={classNames(
        "sticky top-0 z-50 row-start-1 row-end-2 lg:block h-0 lg:h-auto",
        "animate-fadeIn"
      )}
    >
      <div className="flex justify-left items-center px-2 lg:px-8">
        <div className="flex-1 hidden lg:flex flex-wrap-reverse justify-end items-center pb-2">
            <div className="flex justify-center items-center gap-2">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
