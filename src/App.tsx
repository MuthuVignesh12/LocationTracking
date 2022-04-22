import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/Login.Page';
import LiveTracking from './Pages/LiveTracking/LiveTracking.page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="tracking" element={<LiveTracking />} />
      </Routes>
    </div>
  );
}

export default App;
