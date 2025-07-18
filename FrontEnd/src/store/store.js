import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import themeReducer from "./slices/theme/themeSlice"; // Import the theme reducer
import resumeInfoReducer from "./slices/resumeInfo/resumeInfo";
import loggedInReducer from "./slices/loogedIn/loogedIn";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    theme: themeReducer,
    resumeInfo: resumeInfoReducer,
    loggedIn: loggedInReducer,
  },
});

export default store;
