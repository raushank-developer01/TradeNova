import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3" href="#">
          TradeNova
        </a>

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
              <a className="nav-link active" href="#">Signup</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">Product</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">Pricing</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">Support</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;