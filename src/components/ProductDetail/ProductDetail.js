import { useSelector } from "react-redux";
import "./ProductDetail.scss";

const ProductDetail = () => {
	const { selectedProduct: product } = useSelector((state) => state.products);

	return (
		<div className="product">
			{product.name && (
				<p className="product-title">
					<b>{product.name}</b>
				</p>
			)}

			{product.description && <p className="product-description">{product.description}</p>}
			{product.price && (
				<p className="product-price">
					<strong>{product.price}</strong>
					<small> £</small>
				</p>
			)}
		</div>
	);
};

export default ProductDetail;
