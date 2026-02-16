import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice.ts";
import { API_OPTIONS, PLAYING_MOVIES_URL } from "../utils/constants.ts";
import type { Movie } from "../types/movie.ts";
import type { RootState } from "../utils/appStore.ts";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies,
  );
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
    if (!nowPlayingMovies) getPlayingMoviesList();
  }, []);
};
export default useNowPlayingMovies;
