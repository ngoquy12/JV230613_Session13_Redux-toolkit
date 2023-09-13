import { createSlice } from "@reduxjs/toolkit";

const randomSlice = createSlice({
  name: "random",
  initialState: [], // Immer
  reducers: {
    // Khai báo danh sách các reducer
    random: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { random } = randomSlice.actions;
export default randomSlice.reducer;
