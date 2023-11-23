import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.scss";

const Cart = () => {
	const { cart } = useSelector((state) => state.cart);

	return (
		<div className="cart">
			<div>
				<h3>Shopping Cart</h3>
				<ul>
					{cart?.map((item) => (
						<li key={item.id}>
							<CartItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} />
							<button>Remove</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Cart;
