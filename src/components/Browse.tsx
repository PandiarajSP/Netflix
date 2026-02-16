import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import type { RootState } from "../utils/appStore";
import GptSearchComponent from "./GptSearchComponent";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const gptSearch = useSelector((store: RootState) => store.gpt.isSearchOpen);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <h1 className="text-red-800 text-5xl">{gptSearch}</h1>
      <div style={{ display: gptSearch ? "none" : "block" }}>
        <MainContainer />
        <SecondaryContainer />
      </div>

      {gptSearch && <GptSearchComponent />}
    </div>
  );
};

export default Browse;
