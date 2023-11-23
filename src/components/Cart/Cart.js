import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Total from "../Total/Total";
import "./Cart.scss";

const Cart = () => {
	const { cart } = useSelector((state) => state.cart);

	return (
		<div className="cart">
			<div className="cart-list-wrapper">
				<h2 className="cart-title">Shopping Cart</h2>
				<ul className="cart-list">
					{cart?.map((item) => (
						<li key={item.id} className="cart-list__item">
							<CartItem key={item.id} id={item.id} name={item.name} price={item.price} description={item.description} quantity={item.quantity} />
						</li>
					))}
				</ul>
			</div>
			<div className="cart-total">
				<Total />
			</div>
		</div>
	);
};

export default Cart;
