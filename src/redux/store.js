import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/cartSlice";

export const store = configureStore({
	reducer: {
		products: productsReducer
	}
});

export default store;
