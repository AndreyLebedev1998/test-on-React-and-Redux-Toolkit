import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    step: 0,
    correctly: 0,
  },
  reducers: {
    setStep(state) {
      state.step += 1;
    },
    setCorrectly(state) {
      state.correctly += 1;
    },
  },
});

export const { setStep, setCorrectly } = questionSlice.actions;

export default questionSlice.reducer;
