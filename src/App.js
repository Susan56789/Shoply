import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CustomersList from "./components/CustomersList";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/CustomersList" element={<CustomersList />} />
          <Route exact path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
