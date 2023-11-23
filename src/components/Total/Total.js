import { useSelector } from "react-redux";
import { getTotalQuantity } from "../../redux/reducers/cartSlice";
import "./Total.scss";

function Total() {
	const { cart } = useSelector((state) => state.cart);
	const totalQuantity = getTotalQuantity({ cart });

	const calcTotal = () => {
		let totalPrice = 0;

		cart?.forEach((item) => {
			totalPrice += item.price * item.quantity;
		});

		return { totalPrice };
	};

	const renderTotal = () => {
		const { totalPrice } = calcTotal();

		return (
			<>
				<h2 className="order-summary">Order Summary</h2>
				<p>
					<span>Total ( {totalQuantity} items ) : </span>
					<strong>
						{totalPrice.toFixed(2)}
						<small> £</small>
					</strong>
				</p>
			</>
		);
	};

	return renderTotal();
}

export default Total;
