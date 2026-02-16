import { createSlice } from "@reduxjs/toolkit";
import type { Movie } from "../types/movie";
interface GptParams {
  isSearchOpen: boolean;
  gptMovieList: Movie[][];
  movieNames: string[];
}
const initialState: GptParams = {
  isSearchOpen: false,
  gptMovieList: [],
  movieNames: [],
};

const gptSlice = createSlice({
  name: "gpt",
  initialState: initialState,
  reducers: {
    toggleSearchButton: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, gptMovieList } = action.payload;
      state.gptMovieList = gptMovieList;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleSearchButton, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
