import { useSelector } from "react-redux";

const ProductDetail = () => {
	const { selectedProduct: product } = useSelector((state) => state.products);

	return (
		<>
			<div>{product.name && <h3>{product.name}</h3>}</div>
			<div>{product.description && <p>{product.description}</p>}</div>
			<div>{product.price && <p>{product.price}</p>}</div>
		</>
	);
};

export default ProductDetail;
