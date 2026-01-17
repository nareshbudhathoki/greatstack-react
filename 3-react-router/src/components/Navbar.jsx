import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
return (
<nav>
  <ul>
    <li><NavLink className={(element)=>{return element.isActive?"red":""}} to="/">Home</NavLink></li>
    <li><NavLink className={(element)=>{return element.isActive?"red":""}} to="/about">About</NavLink></li>
    <li><NavLink className={(element)=>{return element.isActive?"red":""}} to="/contact">Contact</NavLink></li>
    <li><NavLink className={(element)=>{return element.isActive?"red":""}} to="/login">Login</NavLink></li>
  </ul>
</nav>
);
}

export default Navbar;
