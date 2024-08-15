
import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Images from './Images';

function App() {
  return (
    <div className="hero">
      <Header />
      <div className='container'>
        <Content />
        <Images />
      </div>
    </div>
  );
}

export default App;
