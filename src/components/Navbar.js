import React from 'react';
import '../styling/Navbar.css';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="top-nav">
        <div className="left-side">
          <div className="logo">LOGO</div>
        </div>
        <div className="right-side">
          <div className="nav-buttons">
            <button className="login-button">Login</button>
            <button className="signup-button">Signup</button>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <a href="#overview">Overview</a>
        <a href="#curriculum">Curriculum</a>
        <a href="#refund">Refund</a>
        <a href="#testimonials">Testimonials</a>
      </div>
    </div>
  )
}
