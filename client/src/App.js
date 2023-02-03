import './App.css';
// import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from "./Main";
import Addmovie from "./Addmovie";

function App() {
    
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/addmovie" element={<Addmovie />} />
      </Routes>
    </>
  );
}

export default App;