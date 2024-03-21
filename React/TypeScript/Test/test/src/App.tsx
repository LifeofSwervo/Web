import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import './App.css';
import Summary from './components/Summary';
import Projects from './components/Projects';

const App = () => {
  return (
    <html>
      <title>Portfolio</title>
      <NavBar />
      <Introduction />
      <Summary />
      <Projects />
    </html>
  );
}

export default App;
