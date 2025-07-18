import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = !state.value;
      document.body.classList.toggle("dark-mode", state.value);
      document.querySelector(".sun-icon").classList.toggle("hidden");
      document.querySelector(".moon-icon").classList.toggle("hidden");
    },
    setTheme: (state, action) => {
      state.value = action.payload;
      document.body.classList.toggle("dark-mode", state.value);
        document.querySelector(".sun-icon").classList.toggle("hidden");
        document.querySelector(".moon-icon").classList.toggle("hidden");
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
