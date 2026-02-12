import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import lang from "../utils/languageConstants";

const GptSearch = () => {
  const langKey = useSelector((state: RootState) => state.config.lang);
  return (
    <div className="pt-[12%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 text-black font-bold bg-white border rounded-lg col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
