import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Cart from "../Cart/Cart";

describe("Header", () => {
	it("should renders the navigation items correctly", () => {
		const props = {
			totalQuantity: 5
		};

		render(
			<Router>
				<Routes>
					<Route path="/" element={<Header {...props} />} />
					<Route path="/" element={<Cart />} />
				</Routes>
			</Router>
		);

		const homeLink = screen.getByText("Home");
		const cartLink = screen.getByText("Cart");

		expect(homeLink).toBeInTheDocument();
		expect(cartLink).toBeInTheDocument();
	});
});
