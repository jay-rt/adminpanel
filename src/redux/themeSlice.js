import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: false,
  },
  reducers: {
    lightTheme: (state) => {
      state.dark = false;
    },
    darkTheme: (state) => {
      state.dark = true;
    },
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const dark = (state) => state.theme.dark;
export const { lightTheme, darkTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
