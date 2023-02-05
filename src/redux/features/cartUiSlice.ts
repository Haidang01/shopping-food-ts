import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState: {
    openCart: false,
  },
  reducers: {
    toggle: (state) => {
      state.openCart = !state.openCart;
    },
  },
});

export const { toggle } = cartUiSlice.actions;
export default cartUiSlice.reducer;
