import React from 'react';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
      </Routes>
    <Main/>
    <Nav/>




    </div>
  );
}

export default App;
