import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearch from "./GptSearch";
import { LOGIN_BG } from "../utils/constants";

const GptSearchComponent = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGIN_BG} alt="bg-image" />
      </div>
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearchComponent;
