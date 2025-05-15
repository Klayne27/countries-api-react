import { createSlice } from "@reduxjs/toolkit";

// Function to get the initial mode from localStorage or system preference
const getInitialMode = () => {
  const savedMode = localStorage.getItem("theme");
  if (savedMode) {
    return savedMode;
  }
  // Check system preference if no preference is saved
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
