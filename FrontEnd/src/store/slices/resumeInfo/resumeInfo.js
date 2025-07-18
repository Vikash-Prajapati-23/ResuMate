import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
};

const resumeInfoSlice = createSlice({
    name: "resumeInfo",
    initialState,
    reducers: {
        setResumeInfo: (state, action) => {
            state.value = action.payload;
        },

        updateResumeInfoField: (state, action) => {
            const {field, data} = action.payload;
            if(state.value) {
                state.value[field] = data;
            };
        },

        resetResumeInfo: (state) => {
            state.value = null;
        },
    }
});

export const {setResumeInfo, updateResumeInfoField, resetResumeInfo} = resumeInfoSlice.actions;
export default resumeInfoSlice.reducer;