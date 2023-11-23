import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productFeedSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer
	}
});

export default store;
