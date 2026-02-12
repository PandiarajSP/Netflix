import { createSlice } from "@reduxjs/toolkit";
interface GptParams {
  isSearchOpen: boolean;
}
const initialState: GptParams = {
  isSearchOpen: false,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState: initialState,
  reducers: {
    toggleSearchButton: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
      console.log("slice" + state.isSearchOpen);
    },
  },
});

export const { toggleSearchButton } = gptSlice.actions;
export default gptSlice.reducer;
