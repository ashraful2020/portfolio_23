import React from "react";
import { Icon } from "../../assets";
import { Link, NavLink } from "react-router-dom";
import { sideBarMenu, socialIcons } from "../../data/data";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <section className="sidebar-container">
      <div className="sidebar-wrapper">
        <Link to={"/"} className="logo-container">
          <Icon />
          <span className="custom-color">Ashraful </span>
        </Link>
        <ul className="sidebar-link">
          {sideBarMenu.map(({ text, url, icon }, _i) => {
            return (
              <li key={_i}>
                <NavLink
                  to={url}
                  className={({ isActive }) => {
                    return isActive ? "navLink active-navLink" : "navLink";
                  }}
                >
                  {icon} {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <section className="sidebar-social-icon">
          {socialIcons.map(({ icon, url }, _i) => {
            return (
              <a href={url} key={_i} target="_blank" rel="noreferrer">
                {icon}
              </a>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Sidebar;
