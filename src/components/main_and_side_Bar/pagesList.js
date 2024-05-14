import React from "react";
import { NavLink } from "react-router-dom";
const PagesList = () => {
  return (
    <div>
      <li className="nav-item">
            <NavLink to="/add-new-material" className="nav-link page">
              <span >add new material</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-existing-material" className="nav-link page">
              <span >add existing material</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-new-final-product" className="nav-link page">
              <span >add new final product</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-existing-final-product" className="nav-link page">
              <span >add existing final product</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/all-report" className="nav-link page">
              <span >all reports </span>
            </NavLink>
          </li>
    </div>
  );
};

export default PagesList;
