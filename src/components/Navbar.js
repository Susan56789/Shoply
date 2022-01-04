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
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
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
