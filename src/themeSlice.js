import { createSlice } from "@reduxjs/toolkit";

const getInitialMode = () => {
  const savedMode = localStorage.getItem("theme");
  if (savedMode) {
    return savedMode;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getInitialMode(),
  },
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
