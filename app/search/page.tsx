import { getAllProducts, searchProducts } from "lib/products";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { q: searchValue, category } = searchParams as { [key: string]: string };

  let products = getAllProducts();

  // Filter by category if provided
  if (category) {
    products = products.filter((p) => p.category === category);
  }

  // Search by query if provided
  if (searchValue) {
    products = searchProducts(searchValue);
  }

  const resultsText = products.length > 1 ? "results" : "result";

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? "There are no products that match "
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.handle}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                {product.images[0] && (
                  <img
                    src={product.images[0].url}
                    alt={product.images[0].altText || product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 truncate">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <p className="font-bold text-lg">${product.variants[0]?.price.toFixed(2)}</p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-12">No products found</p>
      )}
    </div>
  );
}
