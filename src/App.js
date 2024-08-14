
import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <div className="hero">
      <Header />
      <div className='container'>
        <Content />
      </div>
    </div>
  );
}

export default App;
