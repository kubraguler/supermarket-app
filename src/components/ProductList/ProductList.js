import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectedProduct } from "../../redux/reducers/cartSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<ul>
			{products &&
				products?.map((product) => {
					return (
						<li key={product.id}>
							<Link
								to={`/product/${product.id}`}
								onClick={() => {
									dispatch(selectedProduct(product));
								}}
							>
								<p>
									<b>Name: </b>
									{product.name}
								</p>
								<p>
									<b>Description: </b>
									{product.description} - <b>Price: </b>
									{product.price}
								</p>
							</Link>
						</li>
					);
				})}
		</ul>
	);
};

export default ProductList;
