import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
        {directors.map((director, index) => <div key={index}>
          <b>Name: {director.name}</b>
          <div>
            <b>Movies</b>
            <ul>
              {director.movies.map((movie, movieIndex) => <li key={movieIndex}>{movie}</li>)}
            </ul>
          </div>
        </div>)}
      </ul>
    </div>
  );
}

export default Directors;
