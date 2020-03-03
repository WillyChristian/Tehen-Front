import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styleNavbar';

export default function NavIndex() {
  return (
    <Nav>
      <div className="nav-brand">
        <Link to="/">TEHEND</Link>
      </div>
      <ul>
        <li>
          <Link to="/login" className="side-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/posts" className="side-link">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/about" className="side-link">
            Sobre nós
          </Link>
        </li>
      </ul>
    </Nav>
  );
}
