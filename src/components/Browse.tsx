import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import type { RootState } from "../utils/appStore";
import GptSearchComponent from "./GptSearchComponent";
import { useEffect } from "react";

const Browse = () => {
  console.time("render");
  console.log("rendering browse");
  console.timeEnd("render");

  useEffect(() => {
    console.log("Browse mounted");

    return () => {
      console.log("Browse unmounted");
    };
  }, []);

  const gptSearch = useSelector((store: RootState) => store.gpt.isSearchOpen);
  useNowPlayingMovies(gptSearch);
  usePopularMovies(gptSearch);
  useTopRatedMovies(gptSearch);
  console.log("GPT search" + gptSearch);
  return (
    <div>
      <Header />
      {/* <h1 className="text-red-800 text-5xl">{gptSearch}</h1>
      <div style={{ display: gptSearch ? "none" : "block" }}>
        <MainContainer />
        <SecondaryContainer />
      </div> */}

      {/* {gptSearch && <GptSearchComponent />} */}
      <GptSearchComponent/>
    </div>
  );
};

export default Browse;
