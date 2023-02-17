import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../assets/icons/Logo.svg";
import search from "../assets/icons/Search (1).svg";

export default function Navbar() {
  return (
    <div className="navbar nav">
      <div className="container">
        <img src={logo} alt="" />
        <nav className="links">
          <ul className="display-f">
            <li className="ml-2">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/pages">Pages</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/project">Project</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="ml-2">
              <img src={search} alt="" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
