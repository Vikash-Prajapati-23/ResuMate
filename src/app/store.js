import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice"; // Import the theme reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer, // Add the theme reducer
  },
});

export default store;
