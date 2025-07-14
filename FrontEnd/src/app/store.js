import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice"; // Import the theme reducer
import resumeInfoReducer from "../features/resumeInfo/resumeInfo";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    resumeInfo: resumeInfoReducer, 
  },
});

export default store;
