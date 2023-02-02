import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {
    
  const [movieList, setMovieList] = useState([])
  
    useEffect(() => {
    fetch(`http://localhost:8080/movies`)
    .then(res => res.json())
    .then(data => {
      setMovieList(data);
    })
  },[])
 
  return (
      <div className="App">
        {/* <Routes>
          <Route path="/" element={<Homepage />} /> */}
          {/* <Route path="/movies" element={<Movie />} />
        </Routes> */}
        <h3>Movies</h3>
          <ul>
            {movieList.map(movie => {
              return <li>{movie.title}<br></br><img src={movie.img} alt='Pic' height='200' width='200'/></li>
            })}
          </ul>
      </div>
  );
}

export default App;
