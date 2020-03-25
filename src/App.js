import React from 'react';
import './App.css';
// import { Router} from "@reach/router";
import AstridLogo from './components/AstridLogo';
import MenuBar from './components/MenuBar';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <section className='menu'>
        <AstridLogo/>
        <MenuBar/>
      </section>
      <AboutUs/>
      <WhatWeDo/>
      <GetInTouch/>
      <Footer/>
      {/* <Router>
        <AboutUs path="/"/>
        <WhatWeDo path="/what-we-do"/>
        <GetInTouch path="/get-in-touch"/>
      </Router> */}
    </div>
  );
}

export default App;
