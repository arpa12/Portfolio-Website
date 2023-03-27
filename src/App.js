import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='f-heading'>
        <h1>My Skills</h1>
        <p>You can check my skills</p>
      </div>
      <Features/>
      <Services/>
      <Contact/>

    </div>
  );
}

export default App;
