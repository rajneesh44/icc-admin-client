import { useEffect } from "react";
import "../App.css";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  useEffect(() => {
    const path = window.location.pathname.split("/")[1];
    const element = document.getElementById(`nav-${path}`);
    if (element) {
      element.className = "nav-link active";
    }
  });
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} alt="logo" className="nav-logo" />

        <a className="navbar-brand" href="/login">
          <strong>ICC Admin</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/products"
                id="nav-products"
              >
                <strong>Products</strong>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/tutorials"
                id="nav-tutorials"
              >
                <strong>Tutorials</strong>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="logout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
