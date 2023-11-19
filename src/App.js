import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path="/product/:id" element={<ProductDetail />} />
			</Routes>
		</div>
	);
}

export default App;
