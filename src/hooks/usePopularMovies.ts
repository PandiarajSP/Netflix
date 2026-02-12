import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice.ts";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants.ts";
import type { Movie } from "../types/movie.ts";

const usePopularMovies = (gptSearch: boolean) => {
  const dispatch = useDispatch();

  const getPopularMoviesList = async () => {
    try {
      const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
      const dataJson = await data.json();
      const movieList: Movie[] = dataJson["results"];
      if (movieList) dispatch(addPopularMovies(movieList));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if(gptSearch) return;
    getPopularMoviesList();
  }, []);
};
export default usePopularMovies;
