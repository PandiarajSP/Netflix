import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice.ts";
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constants.ts";
import type { Movie } from "../types/movie.ts";
import type { RootState } from "../utils/appStore.ts";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(
    (store: RootState) => store.movies.topRatedMovies,
  );
  const getTopRatedMoviesList = async () => {
    try {
      const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);
      const dataJson = await data.json();
      const movieList: Movie[] = dataJson["results"];
      if (movieList) dispatch(addTopRatedMovies(movieList));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if(!topRatedMovies) getTopRatedMoviesList();
  }, []);
};
export default useTopRatedMovies;
