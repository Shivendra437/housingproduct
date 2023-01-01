import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navabr">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Magazine</li>
        </ul>
        <div className="Searchbar">
          <input type="text" />
          <input type="submit" className="btn" />
        </div>
        <div className="cart">Cart</div>
        <div className="login">Login</div>
      </div>
    </>
  );
}
