import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Profiler
      </Link>
      <div className="right menu"></div>
      <Link to="/" className="item">
        All Profiles
      </Link>
    </div>
  );
};

export default Header;
