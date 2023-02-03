import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';

function Addmovie() {
    let newMovieTitle = '';
    let newMovieImg = '';

    const onSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
    <form action="/" method="get">
        <label htmlFor="addmovie">
            <span className="visually-hidden">Add Movie</span>
        </label>
        <br></br>
        <input
            type="text"
            id="enter-title"
            placeholder="Enter Movie Title"
            name="s" 
        />
        <input
            type="text"
            id="enter-img"
            placeholder="Enter Movie Image URL"
            name="s" 
        />
        <button type="submit">Submit</button>
    </form>
    )
}

export default Addmovie;


// Infinity War
// https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_mas_hlf_01_3.jpg