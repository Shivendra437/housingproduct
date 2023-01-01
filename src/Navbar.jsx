import React from "react";
import navbar from "./navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div>
            <div>Home</div>
            <div>Shop</div>
            <div>Magazine</div>
          </div>
          <div className="Searchbar">
            <input type="text" />
            <input type="submit" className="btn" />
          </div>
          <div className="cart">Cart</div>
          <div className="login">Login</div>
        </div>
      </nav>
    </>
  );
}
