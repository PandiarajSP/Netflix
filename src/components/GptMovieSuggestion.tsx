import React from "react";
import type { RootState } from "../utils/appStore";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovieList, movieNames } = useSelector(
    (store: RootState) => store.gpt,
  );
  if (!movieNames) return null;
  return (
    <div className="bg-black/70 text-white">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList title={movie} movies={gptMovieList[index]} key={movie} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
