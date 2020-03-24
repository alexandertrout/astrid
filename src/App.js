import React from 'react';
import './App.css';
import { Router} from "@reach/router";
import AstridLogo from './components/AstridLogo';
import MenuBar from './components/MenuBar';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('./fonts/brandon-grotesque-light-58a8a4b38001d.otf');
  body {
    font-family: 'brandon-light';
  }
`

function App() {
  return (
    <div className="App">
       <GlobalStyles />
      <section class='menu'>
        <AstridLogo/>
        <MenuBar/>
      </section>
      <AboutUs/>
      <WhatWeDo/>
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
