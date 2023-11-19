import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json";

const options = {
	method: "GET",
	headers: {
		"Content-Type": "application/json"
	}
};

const initialState = {
	products: [],
	loading: false,
	error: ""
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	const response = await fetch(baseURL, options);
	const data = await response.json();
	// console.log(data);
	return data;
});

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
		});
		builder.addCase(fetchProducts.rejected, (state) => {
			state.loading = false;
		});
	}
});

export default productSlice.reducer;
