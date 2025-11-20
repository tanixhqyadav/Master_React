import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex gap-4">
    <Link to="/">Home</Link>
    <Link to="/hooks">Hooks Demo</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navbar;
