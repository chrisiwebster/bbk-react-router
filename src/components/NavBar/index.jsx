import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import './styles.css'

const NavBar = () => {
  return (
    <nav>
      <HashRouter>
          <ul role="navigation">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/fourth">
                Fourth
              </Link>
            </li>
          </ul>
        </HashRouter>
    </nav>
  )
}

export default NavBar