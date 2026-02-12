import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";
import "../index.css";

interface MovieList {
  title: string;
  movies: Movie[] | null;
}

const MovieList = ({ title, movies }: MovieList) => {
  if (!movies) return;
  return (
    <div className="px-6">
      <h1 className="text-4xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((movie: Movie) => {
              return (
                <MovieCard
                  imgPath={movie.poster_path}
                  movieTitle={movie.title}
                  key={movie.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
