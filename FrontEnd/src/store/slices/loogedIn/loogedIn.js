import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    setLogIn: (state) => {
      state.value = true;
    },

    setLogOut: (state) => {
      state.value = false;
    },
  },
});

export const { setLogIn, setLogOut } = loggedInSlice.actions;
export default loggedInSlice.reducer;
