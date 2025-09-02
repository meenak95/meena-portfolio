import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  console.log('App component is rendering with full portfolio');
  return (
    <div className="App">
      <div style={{position: 'fixed', top: 0, left: 0, background: 'red', color: 'white', padding: '5px', zIndex: 9999}}>
        Portfolio Loaded: {new Date().toLocaleTimeString()}
      </div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
