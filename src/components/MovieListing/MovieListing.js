import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
  getLoader,
} from "../../redux/movies/movieSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import { Settings } from "../../common/settings";
import Slider from "react-slick";
import Loader from "react-loader-spinner";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const loader = useSelector(getLoader);
  console.log("loader", loader);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {!loader ? (
            <Slider {...Settings}>
              {movies.Response === "True" ? (
                movies.Search.map((movie) => {
                  return <MovieCard key={movie.imdbID} data={movie} />;
                })
              ) : (
                <div className="movies-error">
                  <h3>{movies.Error}</h3>
                </div>
              )}
            </Slider>
          ) : (
            <Loader
              type="Bars"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
              className="loader-listing"
            />
          )}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {!loader ? (
            <Slider {...Settings}>
              {shows.Response === "True" ? (
                shows.Search.map((show, index) => {
                  return <MovieCard key={index} data={show} />;
                })
              ) : (
                <div className="shows-error">
                  <h3>{movies.Error}</h3>
                </div>
              )}
            </Slider>
          ) : (
            <Loader
              type="Bars"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
              className="loader-listing"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { MovieListing };
