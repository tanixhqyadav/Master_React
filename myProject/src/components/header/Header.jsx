import React from 'react';
import './header.css'; 
import logova from '../../assets/logova.png'; // Adjust the path according to your folder structure
function Header() {
  return (
    <>
    <div id='main'>
      <div id='nav'>
        <div id='navbar'>
          <img id='logo'  width={200} src={logova} alt="" />
          <ul>
            <a href=""><li>Home</li></a>
            <a href=""><li>Explore</li></a>
            <a href=""><li>Course</li></a>
            <a href=""><li>Contact Us</li></a>
          </ul>
            <button id='btn'>
              Sign in 
            </button>
        </div>
      </div>
        <div id='plot'>
          <h1>Digital Platform</h1>
          <h1>for all student</h1>
          <h1>activity</h1>
        </div>
        <div id='plot1'>
          <h3>We designed Connections Academy to give </h3>
          <h3>students all across the nation a tution-free online </h3>
          <h3>public school that lets them learn.</h3>
        </div>
        <button id='boton'>
          Get Started
        </button>
      </div>
    </>
  );
}

export default Header;
