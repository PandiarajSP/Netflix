import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice.ts";
import { API_OPTIONS, PLAYING_MOVIES_URL } from "../utils/constants.ts";
import type { Movie } from "../types/movie.ts";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getPlayingMoviesList = async () => {
    try {
      const data = await fetch(PLAYING_MOVIES_URL, API_OPTIONS);
      const dataJson = await data.json();
      const movieList: Movie[] = dataJson["results"];
      if (movieList) dispatch(addNowPlayingMovies(movieList));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPlayingMoviesList();
  }, []);
};
export default useNowPlayingMovies;
