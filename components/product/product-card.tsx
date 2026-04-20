import Link from 'next/link';
import { Product } from 'lib/products';

export default function ProductCard({
  product,
  locale,
}: {
  product: Product;
  locale: string;
}) {
  const title = locale === 'ru' && (product as any).titleRu ? (product as any).titleRu : product.title;
  const price = product.variants[0]?.price ?? 0;
  const currency = '$';

  return (
    <Link
      href={`/${locale}/product/${product.handle}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
    >
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        {product.images[0] && (
          <img
            src={product.images[0].url}
            alt={product.images[0].altText || title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">{product.category}</p>
        <p className="font-bold text-lg">
          {currency}{price.toFixed(2)}
        </p>
        {product.variants.length > 1 && (
          <p className="text-xs text-gray-400 mt-1">
            {product.variants.length} variants
          </p>
        )}
      </div>
    </Link>
  );
}