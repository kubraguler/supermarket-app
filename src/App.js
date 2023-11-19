import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/reducers/cartSlice";

import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import "./App.scss";

function App() {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div className="App">
			<Header />
			<ProductList products={products} />
		</div>
	);
}

export default App;
