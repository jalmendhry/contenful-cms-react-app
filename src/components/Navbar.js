import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" to="/">
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/about">
            About
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/contact-us">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
