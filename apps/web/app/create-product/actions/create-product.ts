"use server";

import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData) {
	const name = formData.get("name");
	const price = formData.get("price");

	await fetch(`${process.env.API_URL}/products`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name, price }),
	});

	revalidateTag("products", {
		expire: 60 * 60 * 24, // 24 hours
	});
}
