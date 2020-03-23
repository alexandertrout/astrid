import React from 'react';
import './App.css';
import AstridLogo from './components/AstridLogo'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <div className="App">
      <section class='menu'>
        <AstridLogo/>
        <MenuBar/>
      </section>
      <main className="main1">
        <h1>Discover Your Voice</h1>
      </main>
      <main className="main2">
        <h1>About Us</h1>
      </main>
    </div>
  );
}

export default App;
