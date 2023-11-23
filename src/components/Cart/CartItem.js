import { incrementQuantity, decrementQuantity, removeItem } from "../../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ id, name, description, price, quantity = 0 }) {
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<p>{name}</p>
				<p>{description}</p>
				<p>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div>
					<button onClick={() => dispatch(decrementQuantity(id))}>-</button>
					<p>{quantity}</p>
					<button onClick={() => dispatch(incrementQuantity(id))}>+</button>
				</div>
				<button onClick={() => dispatch(removeItem(id))}>Remove</button>
			</div>
		</div>
	);
}

export default CartItem;
