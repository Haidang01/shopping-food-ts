import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import CartSlice from "./features/cartSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import cartUi from "./features/cartUiSlice";
const rootReducer = combineReducers({
  cart: CartSlice,
  cartUi,
});

export const store = configureStore({
  reducer: { rootReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
