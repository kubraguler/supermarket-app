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
											className="product-item__link"
											to={`/product/${product.id}`}
											onClick={() => {
												dispatch(selectedProduct(product));
											}}
										>
											<div className="product-item__info">
												<p className="product-item__title">
													<b>{product.name}</b>
												</p>
												<p className="product-item__description">{product.description}</p>
												<p className="product-item__price">
													<strong>{product.price}</strong>
													<small> £</small>
												</p>
											</div>
										</Link>
										<button
											className="product-add"
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
											➕
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
