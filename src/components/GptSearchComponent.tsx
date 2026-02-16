import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearch from "./GptSearch";
import { LOGIN_BG } from "../utils/constants";

const GptSearchComponent = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={LOGIN_BG} alt="bg-image" />
      </div>
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearchComponent;
