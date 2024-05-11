// Navbar.js
import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="siteName">
        KalBar
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/pantai">Pantai</CustomLink>
        <CustomLink to="/gunung">Gunung</CustomLink>
        <CustomLink to="/situs-bersejarah">Situs Bersejarah</CustomLink>
        <CustomLink to="/about-us">About Us</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
