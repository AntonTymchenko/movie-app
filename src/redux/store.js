import { configureStore } from "@reduxjs/toolkit";
import moviesRdecuer from "./movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesRdecuer,
  },
});
