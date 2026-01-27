import MovieList from "./MovieList";
import type { RootState } from "../utils/appStore";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-65 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
