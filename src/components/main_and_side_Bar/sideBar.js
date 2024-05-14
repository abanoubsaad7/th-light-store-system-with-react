import React from "react";
import PagesList from "./pagesList";
const SideBar = () => {
  return (
    <>
      <nav className="sideBar col-lg-2">
        <ul className="navbar-nav me-auto  mb-lg-0">
          <PagesList/>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
