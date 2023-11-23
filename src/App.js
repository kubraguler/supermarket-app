import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "./redux/reducers/cartSlice";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import "./App.scss";

function App() {
	const { cart } = useSelector((state) => state.cart);
	const totalQuantity = getTotalQuantity({ cart });

	return (
		<div className="App">
			<Header totalQuantity={totalQuantity} />
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path="/product/:id" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
