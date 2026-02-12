import { createSlice } from "@reduxjs/toolkit";

type lang = "en" | "tamil" | "hindi";
interface ConfigSlice {
  lang: lang;
}

const initialState: ConfigSlice = {
  lang: "en",
};
const configSlice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
