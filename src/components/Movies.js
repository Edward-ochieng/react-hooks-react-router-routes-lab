import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    <ul>
      {movies.map((each, movieIndex) => <li key={movieIndex}>
        <b>Title: {each.title}</b>
        <p>Time: {each.time}</p>
        <div></div>
        <b>Genres</b>
        <ul>
          {each.genres.map((genre, genreIndex) => <li key={genreIndex}>{genre}</li>)}
        </ul>
      </li>)}
    </ul>
  </div>
}

export default Movies;
