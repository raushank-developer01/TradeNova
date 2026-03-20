import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          TradeNova
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav gap-4">

            <li className="nav-item">
              <Link className="nav-link active" to="/signup">Signup</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/products">Product</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;