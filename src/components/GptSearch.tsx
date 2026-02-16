import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import lang from "../utils/languageConstants";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearch = () => {
  const langKey = useSelector((state: RootState) => state.config.lang);
  const searchText = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const searchMovieInTMDB = async (movie: string) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await response.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    try {
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current?.value +
        ". only give me names of 5 movies comma separated like the example result given ahead. Example Result: Parasakthi, Viduthalai, Vadachennai, Arasan, Indian";
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + OPENAI_KEY,
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "MovieApp",
          },
          body: JSON.stringify({
            model: "openrouter/free",
            messages: [
              {
                role: "user",
                content: gptQuery,
              },
            ],
          }),
        },
      );

      const text = await response.text();
      const data = JSON.parse(text);
      if (!data.choices) {
        //TODO: Error handling
      }
      console.log(data.choices[0].message.content);
      const gptMovies = data.choices[0].message.content.split(",");
      // For each movie, will search TMDB API
      const promiseArray = gptMovies.map((movie: string) =>
        searchMovieInTMDB(movie),
      );
      // promiseArray contains the array of promises
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, gptMovieList: tmdbResults }),
      );
      console.log(tmdbResults);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-[12%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 text-black font-bold bg-white border rounded-lg col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
