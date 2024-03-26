import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import './App.css';
import Summary from './components/Summary';
import Projects from './components/Projects';
import Footer from './components/Footer';

const htmlStyle: React.CSSProperties = {
  backgroundColor: "#748386",
  fontFamily: 'Poppins, ui-sans-serif',
  color: 'white',
  
}

const App = () => {
  return (
    <div style={htmlStyle}>
      <title>Portfolio</title>
      <NavBar />
      <Introduction />
      <Summary />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
