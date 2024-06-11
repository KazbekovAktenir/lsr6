import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/add"}>ADD</NavLink>
      <NavLink to={"/"}>PRODUCTS</NavLink>
      <NavLink to={"/edit"}>EDIT</NavLink>
    </div>
  );
};

export default Navbar;
