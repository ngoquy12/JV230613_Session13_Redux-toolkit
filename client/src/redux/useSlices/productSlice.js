import { createSlice } from "@reduxjs/toolkit";

import {
  createProduct,
  deleteById,
  getAllProduct,
  updateProduct,
} from "../../services/productService";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.status = "Loading"; // Chờ
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        console.log("action", action);
        state.status = "Successfully"; // Thành công
        state.data = action.payload; // Dữ liệu trả về
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.status = "Failed"; // Thất bại
        state.error = action.error.message; // Nội dung lỗi
      })
      .addCase(deleteById.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        [...state.data, action.payload];
      });
  },
});

export default productSlice.reducer;
