import React from 'react';
import './App.css';
import AstridLogo from './components/AstridLogo'
import MenuBar from './components/MenuBar'
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
      <section class='menu'>
        <AstridLogo/>
        <MenuBar/>
      </section>
      <AboutUs/>
    </div>
  );
}

export default App;
