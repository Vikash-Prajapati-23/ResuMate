import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    personalInfo: {},
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certifications: [],
    // add more sections as you go
  },
};

const resumeInfoSlice = createSlice({
  name: "resumeInfo",
  initialState,
  reducers: {
    // Replace the entire resume
    setResumeInfo: (state, action) => {
      state.value = action.payload;
    },

    // Update a specific section (like personalInfo, education, etc.)
    updateResumeInfoField: (state, action) => {
      const { field, data } = action.payload;

      if (!state.value) {
        state.value = {};
      }

      // ✅ Handles both object and array fields
      if (Array.isArray(state.value[field])) {
        state.value[field] = [...data]; // replace whole array
      } else {
        state.value[field] = {
          ...state.value[field],
          ...data,
        };
      }
    },

    // Reset the whole resume
    resetResumeInfo: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setResumeInfo, updateResumeInfoField, resetResumeInfo } =
  resumeInfoSlice.actions;
export default resumeInfoSlice.reducer;
