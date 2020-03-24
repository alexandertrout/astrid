import React from 'react';
import AboutInfo from './AboutInfo'
import Fade from 'react-reveal/Fade';


const AboutUs = () => {
  return (
    <main className="main-1">
      <Fade top>
        <div className="main-text">
         <p className="main-text-text">Discover Your Voice</p>
         <p className="main-text-stop-red">.</p>
        </div>
      </Fade>
        <AboutInfo/>
      </main>
  );
};

export default AboutUs;