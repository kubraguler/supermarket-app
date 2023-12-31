import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: []
};

export const getTotalQuantity = (state) => {
	if (state.cart) {
		return state.cart.reduce((total, item) => total + item.quantity, 0);
	}
	return 0;
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload.id);
			if (item) {
				item.quantity++;
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
		},
		incrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			item.quantity++;
		},
		decrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		deleteItem: (state, action) => {
			const deleteItem = state.cart.filter((item) => item.id !== action.payload);
			state.cart = deleteItem;
		}
	}
});

export default cartSlice.reducer;
export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, deleteItem } = cartSlice.actions;
