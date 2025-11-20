import React from 'react';
import './Home.css';
import amazon from '../../assets/amazon.png'; // Adjust the path according to your folder structure
import facebook from '../../assets/facebook.png'; // Adjust the path according to your folder structure
import google from '../../assets/google.png'; // Adjust the path according to your folder structure
import microsoft from '../../assets/microsoft.png'; // Adjust the path according to your folder structure
import capegemini from '../../assets/capegemini.png'; // Adjust the path according to your folder structure
import justpay from '../../assets/justpay.png'; // Adjust the path according to your folder structure
import ladki from '../../assets/ladki.png'; // Adjust the path according to your folder structure

const Home = () => {
  return (
    <>
      <div id='home1'>
        <div id='icons'>
          <img className='icn' src={amazon} alt="" />
          <img className='icn' src={facebook} alt="" />
          <img className='icn' src={google} alt="" />
          <img className='icn' src={microsoft} alt="" />
          <img className='icn'id='cape' src={capegemini} alt="" />
          <img className='icn' src={justpay} alt="" />
        </div>
        <div id='home-main'>
          <div id='home-img'>
            <img id='ladki' src={ladki} alt="" />
          </div>
          <div id='home-c'>
            <div id='plot'>
              <h1>Transform your life</h1>
              <h1>through Education</h1>
              <h1>Enroll Now !</h1>
            </div>
            <div id='plot1'>
              <h3>Vaishnavi Sharma our top mentor has just</h3>
              <h3>launched a free online Development-Course for </h3>
              <h3>beginners and industrial techs also</h3>
            </div>
            <button id='boton'>
                Let's learn together
            </button>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Home;
