import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import './App.css';
import Summary from './components/Summary';
import Projects from './components/Projects';

const htmlStyle: React.CSSProperties = {
  backgroundColor: "lightgrey",
}

const App = () => {
  return (
    <html  style={htmlStyle}>
      <title>Portfolio</title>
      <NavBar />
      <Introduction />
      <Summary />
      <Projects />
    </html>
  );
}

export default App;
