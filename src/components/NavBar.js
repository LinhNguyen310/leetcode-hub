import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import leetcodeLogo from "../assets/images/leetcode-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="nav_bar_container">
        <div className="sub_nav_bar_container ">
          <a className="leetcode_logo">
            <img src={leetcodeLogo} alt="LeetCode Logo" style={{ width: '25px', height: 'auto' }} />
          </a>
          <div className={isOpen ? "nav__menu active" : "nav__menu"} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/news" className="nav__link">
                  Stat
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about-us" className="nav__link">
                  About Me
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/favorite" className="nav__link">
                  News
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/location" className="nav__link">
                  Location
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/get-started" className="nav__link nav__cta">
                  Get Started
                </NavLink>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleMenu}></div>
          </div>
          <div className="sub_nav_list">
            <div className="sub_nav_list_container">
              <li className="nav__item">
                <div className="text-text-secondary dark:text-text-secondary hover:bg-fill-3 dark:hover:bg-dark-fill-3 rounded w-8 h-8 relative flex items-center justify-center group cursor-pointer focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M6.20374 15.8174C6.18177 15.8563 6.15975 15.8945 6.13771 15.9322H17.8623C17.8403 15.8945 17.8182 15.8563 17.7963 15.8174C16.8756 14.1898 16.3333 12.0111 16.3333 9.21793C16.3333 6.93819 14.4012 5.07507 12 5.07507C9.5988 5.07507 7.66667 6.93819 7.66667 9.21793C7.66667 12.0111 7.12442 14.1898 6.20374 15.8174ZM20 17.9322H4.00001C3.00196 17.9322 2.61971 16.6307 3.45925 16.091C3.66114 15.9612 4.0464 15.5691 4.46294 14.8327C5.20893 13.5139 5.66667 11.6748 5.66667 9.21793C5.66667 5.81702 8.51018 3.07507 12 3.07507C15.4898 3.07507 18.3333 5.81702 18.3333 9.21793C18.3333 11.6748 18.7911 13.5139 19.5371 14.8327C19.9536 15.5691 20.3389 15.9612 20.5408 16.091C21.3803 16.6307 20.9981 17.9322 20 17.9322ZM12.9372 19.2783C13.2219 18.805 13.8363 18.6521 14.3096 18.9368C14.7828 19.2215 14.9357 19.836 14.651 20.3092C14.0976 21.2292 13.0875 21.7902 12 21.7902C10.9125 21.7902 9.90245 21.2292 9.34903 20.3092C9.06434 19.836 9.2172 19.2215 9.69045 18.9368C10.1637 18.6521 10.7781 18.805 11.0628 19.2783C11.2515 19.5919 11.6085 19.7902 12 19.7902C12.3915 19.7902 12.7485 19.5919 12.9372 19.2783Z"></path></svg></div>
              </li>
              <li className="nav__item">
                <a className="" href="/problems/missing-number/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="1em" height="1em" fill="currentColor"><path fillRule="evenodd" d="M7.19 1.564a.75.75 0 01.729.069c2.137 1.475 3.373 3.558 3.981 5.002l.641-.663a.75.75 0 011.17.115c1.633 2.536 1.659 5.537.391 7.725-1.322 2.282-3.915 2.688-5.119 2.688-1.177 0-3.679-.203-5.12-2.688-.623-1.076-.951-2.29-.842-3.528.109-1.245.656-2.463 1.697-3.54.646-.67 1.129-1.592 1.468-2.492.337-.895.51-1.709.564-2.105a.75.75 0 01.44-.583zm.784 2.023c-.1.368-.226.773-.385 1.193-.375.997-.947 2.13-1.792 3.005-.821.851-1.205 1.754-1.282 2.63-.078.884.153 1.792.647 2.645C6.176 14.81 7.925 15 8.983 15c1.03 0 2.909-.366 3.822-1.94.839-1.449.97-3.446.11-5.315l-.785.812a.75.75 0 01-1.268-.345c-.192-.794-1.04-2.948-2.888-4.625z" clipRule="evenodd"></path></svg><span>0</span></a>
              </li>
              <li className="nav__item">
                <NavLink>
                  <button className="navbar_user_avatar">
                      <img src="https://assets.leetcode.com/users/avatars/avatar_1700082122.png" alt="avatar"/>
                  </button>
                </NavLink>
              </li>
            </div>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}></div>
        
      </nav>
    </header>
  );
};

export default Navbar;
