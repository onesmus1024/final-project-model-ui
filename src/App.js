
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/home/home';
import Nav from './components/nav-bar/nav';
import Trade from './components/trade/trade';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trade" element={<Trade />} />

          </Routes>
      </Router>

    </div>
  );
}

export default App;
