import { getProductByHandle } from 'lib/products';
import { getLocaleFromPath, t } from 'lib/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; handle: string }>;
}) {
  const { locale: localeParam, handle } = await params;
  const locale = getLocaleFromPath(`/${localeParam}/`);
  const product = getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const title = locale === 'ru' && (product as any).titleRu ? (product as any).titleRu : product.title;
  const description = locale === 'ru' && (product as any).descriptionRu ? (product as any).descriptionRu : product.description;

  const translations = {
    en: {
      addToCart: 'Add to Cart',
      size: 'Size',
      color: 'Color',
      selectSize: 'Select Size',
      selectColor: 'Select Color',
      outOfStock: 'Out of Stock',
      backToShop: 'Back to Shop',
    },
    ru: {
      addToCart: 'В корзину',
      size: 'Размер',
      color: 'Цвет',
      selectSize: 'Выберите размер',
      selectColor: 'Выберите цвет',
      outOfStock: 'Нет в наличии',
      backToShop: 'Вернуться в магазин',
    },
  };
  const text = translations[locale];

  const sizes = [...new Set(product.variants.map((v) => v.size).filter(Boolean))];
  const colors = [...new Set(product.variants.map((v) => v.color).filter(Boolean))];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link
        href={`/${locale}/search`}
        className="text-gray-500 hover:text-black mb-8 inline-block"
      >
        ← {text.backToShop}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
          {product.images[0] && (
            <img
              src={product.images[0].url}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-2xl font-bold mb-6">${product.variants[0]?.price.toFixed(2)}</p>

          <div className="prose mb-8">
            <p>{description}</p>
          </div>

          {/* Size Selection */}
          {sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">{text.size}: {text.selectSize}</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">{text.color}: {text.selectColor}</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition disabled:bg-gray-300">
            {product.availableForSale ? text.addToCart : text.outOfStock}
          </button>
        </div>
      </div>
    </div>
  );
}