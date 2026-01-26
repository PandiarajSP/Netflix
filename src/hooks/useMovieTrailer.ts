import { useDispatch } from "react-redux";
import { API_OPTIONS, VIDEOS } from "../utils/constants";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";
import type { Video } from "../types/movie";

const useMovieTrailer = (movieId: string) => {
  const dispatch = useDispatch();
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
      console.log(trailerVideo);
      dispatch(addTrailerVideos(trailerVideo));
    }
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
