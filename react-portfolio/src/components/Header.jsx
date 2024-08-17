import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1>Your Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;
