import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Home from './Components/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </div>
  );
}
export default App;
