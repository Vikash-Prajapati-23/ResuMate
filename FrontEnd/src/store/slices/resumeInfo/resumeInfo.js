import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    personalInfo: {
      first_name: "",
      last_name: "",
      job_title: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
      summary: "",
    },
    skills: [],
    experience: [],
    projects: [],
    education: [],
    certifications: [],
  },
};

const resumeInfoSlice = createSlice({
  name: "resumeInfo",
  initialState,
  reducers: {
    // Replace the entire resume
    setResumeInfo: (state, action) => {
      state.value = {
        ...state.value, // keep existing values
        ...action.payload, // overwrite only provided fields
      };
    },

    // Update a specific section
    updateResumeInfoField: (state, action) => {
      const { field, data } = action.payload;

      if (!(field in state.value)) return; // prevent invalid fields

      if (Array.isArray(state.value[field])) {
        // Replace entire array (could add more fine-grained reducers later)
        state.value[field] = [...data];
      } else {
        // Merge object fields
        state.value[field] = {
          ...state.value[field],
          ...data,
        };
      }
    },

    // Reset everything to defaults
    resetResumeInfo: (state) => {
      state.value = { ...initialState.value }; // fresh copy
    },
  },
});

export const { setResumeInfo, updateResumeInfoField, resetResumeInfo } =
  resumeInfoSlice.actions;
export default resumeInfoSlice.reducer;
