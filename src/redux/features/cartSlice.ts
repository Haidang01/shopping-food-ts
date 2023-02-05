import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../assets/fake-data/products";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface ICartProduct extends IProduct {
  quantity: number;
  totalPrice: number;
}
export interface ICartState {
  cartProducts: ICartProduct[];
  totalQuantity: number;
  totalAmount: number;
}
const initialState: ICartState = {
  cartProducts: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const newItem = action.payload;
      const existingItem = state.cartProducts.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartProducts.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = newItem.price + existingItem.totalPrice;
      }
      state.totalAmount = state.cartProducts.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    //  ========decrease product============
    removerItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.cartProducts.find((item) => item.id === id);
      if (!existingItem) return;
      if (existingItem.quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== id
        );
        state.totalQuantity = 0;
      } else {
        existingItem.quantity--;
        state.totalQuantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalAmount = state.cartProducts.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    // ===============deleteProduct============
    deleteProduct: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingProduct = state.cartProducts.find((p) => p.id === id);
      if (existingProduct) {
        state.cartProducts = state.cartProducts.filter((p) => p.id !== id);
        state.totalQuantity = state.totalQuantity - existingProduct.quantity;
        state.totalAmount = state.cartProducts.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      }
    },
  },
});
export const { addItem, removerItem, deleteProduct } = CartSlice.actions;
export default CartSlice.reducer;
