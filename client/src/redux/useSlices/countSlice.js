import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { value: 0 }, // Immer
  reducers: {
    increase: (state, action) => {
      console.log(action);
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = countSlice.actions; // export action ra ben ngoai
export default countSlice.reducer;

// Type: name/reducer_name
