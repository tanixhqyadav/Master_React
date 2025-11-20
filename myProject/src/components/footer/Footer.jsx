import React from 'react';
import './Footer.css';
import logova from '../../assets/logova.png'
const Footer = () => {
  return (
    <>
      <div id="foot-main">
        <div id="log">
          <img  id='loda' src={logova} alt="" />
          <p>Our motto to fullfill coustmer demand</p>
          <p>by making them satisfied with</p>
          <p>growing their business.</p>

        </div>
        <div id="about">
          <a href=""><h2>About</h2></a>
          <p>About us</p>
          <p>Features</p>
          <p>News </p>
          <p>Carrer</p>
          <p>FAQ</p>
        </div>
        <div id="support">
          <a href=""><h2>Support</h2></a>
          <p>Support center </p>
          <p>Feedback</p>
          <p>Accesibilty</p>
        </div>
        <div id="contact">
          <a href=""><h2>Contact us</h2></a>
          <p>639635882</p>
          <p>learnohub@gmail.com</p>
        </div>

        {/* <hr width="100%" size="2"></hr> */}
      </div>
    </>
  );
}

export default Footer;
