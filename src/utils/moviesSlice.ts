import { createSlice } from "@reduxjs/toolkit";
import type { Movie, Video } from "../types/movie";

interface MovieState {
  nowPlayingMovies: Movie[] | null;
  trailerVideos: Video | null;
}

const initialState: MovieState = {
  nowPlayingMovies: null,
  trailerVideos: null,
};
const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideos } = moviesSlice.actions;
export default moviesSlice.reducer;
