import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">Logo</div>
      <ul className="nav__list">
        <li className="nav__item">Home</li>
        <li className="nav__item">About</li>
        <li className="nav__item">Services</li>
        <li className="nav__item">Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
