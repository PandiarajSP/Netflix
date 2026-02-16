import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Video } from "../types/movie";
import { API_OPTIONS, VIDEOS } from "../utils/constants";
import { addTrailerVideos } from "../utils/moviesSlice";
import type { RootState } from "../utils/appStore";

const useMovieTrailer = (movieId: string) => {
  const dispatch = useDispatch();
  const trailerVideos = useSelector(
    (store: RootState) => store.movies.trailerVideos,
  );
  const getMovieTrailer = async () => {
    const videosURL = VIDEOS.replace("movie_id", movieId);
    const videoList = await fetch(videosURL, API_OPTIONS);
    const videos = await videoList.json();
    if (videos && videos.results.length > 1) {
      const filteredVideos = videos?.results.filter((movie: Video) => {
        return movie.type === "Trailer";
      });
      const trailerVideo = filteredVideos.length
        ? filteredVideos[0]
        : videos?.results[0];
      dispatch(addTrailerVideos(trailerVideo));
    }
  };
  useEffect(() => {
    if (!trailerVideos) getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
