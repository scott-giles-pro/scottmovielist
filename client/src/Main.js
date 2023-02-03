import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Searchbar from "./Searchbar";
import Addmovie from "./Addmovie";
import App from './App';

function Main() {
    
    const [movieList, setMovieList] = useState([])
    
      useEffect(() => {
      fetch(`http://localhost:8080/movies`)
      .then(res => res.json())
      .then(data => {
        setMovieList(data);
      })
    },[])
  
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
  
    const filterMovies = (movieList, query) => {
      if (!query) {
        return movieList;
      }
  
      return movieList.filter((movie) => {
        const searchTitle = movie.title.toLowerCase();
        return searchTitle.includes(query);
      })
    }
  
    const filteredMovies = filterMovies(movieList, query)
   
    return (
      <>
        <Searchbar />
        <Link to='/addmovie'>Add Movie To List</Link>
          <div className="App">
            <h3>Movies</h3>
              <ul>
                {filteredMovies.map(movie => {
                  return <li key={movie.id}>{movie.title}<br></br><img src={movie.img} alt='Pic' height='200' width='200'/></li>
                })}
              </ul>
          </div>
      </>
    );
  }
  
  export default Main;