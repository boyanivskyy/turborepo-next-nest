import { Product } from "@repo/types";

export const Products = async () => {
	const response = await fetch(`${process.env.API_URL}/products`, {
		next: { tags: ["products"] },
	});

	const products: Product[] = await response.json();

	return (
		<div>
			<h1>Products</h1>
			{products.map((product: Product) => (
				<div key={product.id}>
					<p>Name: {product.name}</p>
					<p>Price: {product.price}</p>
				</div>
			))}
		</div>
	);
};
