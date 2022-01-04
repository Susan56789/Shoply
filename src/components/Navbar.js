import React, { Component } from "react";
import logo from "../Logo .png";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="shopify logo" className="logo-img" />
            Shoply
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/CustomersList">
                  Customers
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/ShoppingCart">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
