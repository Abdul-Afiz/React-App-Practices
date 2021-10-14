import React from "react";

function Navbar() {
  return (
    <nav className="Nav-bar">
      <div className="logo">Logo</div>

      <div className="nav-center">
        <a href="#Home">Home</a>
        <a href="#Blog">Blog</a>
        <a href="#Lifestyle">Lifestyle</a>
        <a href="#About Us">About Us</a>
        <a href="#Contact Us">Contact Us</a>
      </div>

      <div className="nav-btns">
        <button className="nav-btn">Log In</button>
        <button className="nav-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
