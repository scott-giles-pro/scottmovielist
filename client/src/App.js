import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function App() {
  return (
    <div className="movielist">
      <header className="movielist-header">
        <p>
          <ul>
            {movies.map(movie => {
              return <li>{movie.title}</li>
            })}
          </ul>
        </p>
       
      </header>
    </div>
  );
}

export default App;
