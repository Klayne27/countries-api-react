import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  selectedRegion: "All",
  openDropdown: null,
  isRegionInteracted: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSelectedRegion(state, action) {
      state.selectedRegion = action.payload;
      state.isRegionInteracted = true
    },
    handleToggleDropdown(state, action) {
      state.openDropdown = state.openDropdown === action.payload ? null : action.payload;
    },
  },
});

export default dataSlice.reducer;

export const { setSearchTerm, setSelectedRegion, handleToggleDropdown, setIsDarkMode } =
  dataSlice.actions;
