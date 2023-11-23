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
	selectedProduct: {},
	loading: false,
	error: ""
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
	try {
		const response = await fetch(baseURL, options);
		if (!response.ok) {
			throw new Error("Failed to fetch products data");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching products data:", error);
		throw error;
	}
});

const productFeedSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		selectedProduct: (state, action) => {
			state.selectedProduct = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	}
});

export default productFeedSlice.reducer;
export const productsReducer = productFeedSlice.reducer;
export const { selectedProduct } = productFeedSlice.actions;
