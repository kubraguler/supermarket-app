import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectedProduct } from "../../redux/reducers/productFeedSlice";
import { addToCart } from "../../redux/reducers/cartSlice";
import "./ProductList.scss";

const ProductList = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<main>
			<ul className="product-list">
				{products &&
					products?.map((product) => {
						return (
							<li key={product.id} className="product-item">
								{product && (
									<>
										<Link
											to={`/product/${product.id}`}
											onClick={() => {
												dispatch(selectedProduct(product));
											}}
										>
											<div className="item__info">
												<p className="item__title">{product.name}</p>
												<p className="item__price">
													<small>$</small>
													<strong>{product.price}</strong>
												</p>
											</div>
										</Link>
										<button
											onClick={() =>
												dispatch(
													addToCart({
														id: product.id,
														name: product.name,
														description: product.description,
														price: product.price
													})
												)
											}
										>
											Add to Cart
										</button>
									</>
								)}
							</li>
						);
					})}
			</ul>
		</main>
	);
};

export default ProductList;
