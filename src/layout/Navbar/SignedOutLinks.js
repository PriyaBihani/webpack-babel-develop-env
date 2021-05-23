import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="navbar-nav ml-auto py-4 py-md-0">
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink
            className="nav-link "
            to="/learn"
            role="button"
            aria-expanded="false"
          >
            Learn
          </NavLink>
          <div className="dropdown-menu"></div>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <NavLink
            className="nav-link "
            to="/login"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Login
          </NavLink>
          <div className="dropdown-menu"></div>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
