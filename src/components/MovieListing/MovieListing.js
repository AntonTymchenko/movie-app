import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../redux/movies/movieSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies.Response === "True" ? (
            movies.Search.map((movie) => {
              return <MovieCard key={movie.imdbID} data={movie} />;
            })
          ) : (
            <div className="movies-error">
              <h3>{movies.Error}</h3>
            </div>
          )}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {shows.Response === "True" ? (
            shows.Search.map((show, index) => {
              return <MovieCard key={index} data={show} />;
            })
          ) : (
            <div className="shows-error">
              <h3>{movies.Error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { MovieListing };
