import { CreateProduct } from "./create-product/create-product";
import { Products } from "./products/products";

// This line configures the Next.js route to always render dynamically, disabling all caching for this page.
// In Next.js 13/14, this is still supported as a route segment/static file convention, but "force-dynamic" is generally only necessary if you want to *guarantee* all requests are dynamic (with no cache).
// If your page needs SSR for all requests (e.g., for server actions, uncached data, or mutating requests), it's still valid to use in modern Next.js.
// If your code works without it and you don't require forced dynamic rendering, it may be removed, but for reliability with server actions, it can be left in.
export const dynamic = "force-dynamic";

export default function Home() {
	return (
		<>
			<CreateProduct />
			<Products />
		</>
	);
}
