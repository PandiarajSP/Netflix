import { createSlice } from "@reduxjs/toolkit";
import type { Movie, Video } from "../types/movie";

interface MovieState {
  nowPlayingMovies: Movie[] | null;
  trailerVideos: Video | null;
  popularMovies: Movie[] | null;
  topRatedMovies: Movie[] | null;
}

const initialState: MovieState = {
  nowPlayingMovies: null,
  trailerVideos: null,
  popularMovies: null,
  topRatedMovies: null
};
const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTopRatedMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
