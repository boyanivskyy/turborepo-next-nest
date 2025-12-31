import createProduct from "./actions/create-product";

export const CreateProduct = async () => {
	return (
		<div>
			<form action={createProduct}>
				<div>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" />
				</div>
				<div>
					<label htmlFor="price">Price:</label>
					<input type="number" id="price" name="price" />
				</div>
				<button type="submit">Create product</button>
			</form>
		</div>
	);
};
