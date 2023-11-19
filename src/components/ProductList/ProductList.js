const ProductList = ({ products }) => {
	return (
		<ul>
			{products &&
				products?.map((product) => {
					return (
						<li key={product.id}>
							<p>
								<b>Name: </b>
								{product.name}
							</p>
							<p>
								<b>Description: </b>
								{product.description} - <b>Price: </b>
								{product.price}
							</p>
							<p></p>
						</li>
					);
				})}
		</ul>
	);
};

export default ProductList;
