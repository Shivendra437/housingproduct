import React from "react";

export default function Navbar() {
  return <>
    
    
     <nav class="navbar">
      <div class="navbar-center">
            <span class="nav-icon">
                <i class="fas fa-bars"></i>
            </span>
            <ul>
                <li><a href="#Home">HOME</a></li>
                <li><a href="#Shop">SHOP</a></li>
                <li><a href="#Magazine">MAGAZINE</a></li>
            </ul>
            <div class="searchbar">
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text">
                
                <button class="search">search</button>
            </div>
            <div class="cart-btn">
                <span ><i class="fas fa-cart-plus"></i></span></li>
                <div class="cart-items">0</div>
            </div>
            <a id="myBtn" class="login-link">LOGIN</a>
      </div>
    </nav>
    
    
    
    </>;
}
