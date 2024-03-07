import React from "react";
import "./sidebar.css";
import { logo } from "../../assets/import";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav_logo">
        <h1 className="the__logo">
          JI<span className="dot">.</span>
        </h1>
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-people"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023 - 2024.</span>
      </div>
    </aside>
  );
};

export default Sidebar;
