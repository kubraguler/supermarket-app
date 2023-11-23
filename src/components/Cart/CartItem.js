import { incrementQuantity, decrementQuantity, deleteItem } from "../../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";
import "./Cart.scss";

function CartItem({ id, name, description, price, quantity = 0 }) {
	const dispatch = useDispatch();

	return (
		<div className="cart-item">
			<p className="cart-item__info">
				<span>{name}</span>
				<i className="cart-item__description">{description}</i>
			</p>
			<p>
				<small>$</small>
				<strong>{price}</strong>
			</p>
			<div className="cart-item__actions">
				<button className="cart-item__actions-button" onClick={() => dispatch(decrementQuantity(id))}>
					-
				</button>
				<p>{quantity}</p>
				<button className="cart-item__actions-button" onClick={() => dispatch(incrementQuantity(id))}>
					+
				</button>
			</div>
			<button className="cart-item__delete" onClick={() => dispatch(deleteItem(id))}>Delete</button>
		</div>
	);
}

export default CartItem;
