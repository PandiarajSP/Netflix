import { LOGIN_BG, OPENAI_KEY } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearch from "./GptSearch";

const GptSearchComponent = () => {
  console.log("API KEY:", OPENAI_KEY);
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
