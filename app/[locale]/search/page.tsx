import { getAllProducts, categories, searchProducts } from 'lib/products';
import ProductCard from '@/components/product/product-card';
import Link from 'next/link';
import { getLocaleFromPath } from 'lib/i18n';

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleFromPath(`/${localeParam}/`);
  const { category, q } = await searchParams;
  const translations = {
    en: {
      title: 'Shop',
      searchPlaceholder: 'Search products...',
      noProducts: 'No products found',
      filterBy: 'Filter by',
      allCategories: 'All Categories',
      sortBy: 'Sort by',
      priceAsc: 'Price: Low to High',
      priceDesc: 'Price: High to Low',
    },
    ru: {
      title: 'Магазин',
      searchPlaceholder: 'Поиск товаров...',
      noProducts: 'Товары не найдены',
      filterBy: 'Фильтр',
      allCategories: 'Все категории',
      sortBy: 'Сортировка',
      priceAsc: 'Цена: по возрастанию',
      priceDesc: 'Цена: по убыванию',
    },
  };
  const text = translations[locale];

  let products = getAllProducts();
  if (category) {
    products = products.filter((p) => p.category === category);
  }
  if (q) {
    products = searchProducts(q);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{text.title}</h1>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href={`/${locale}/search`}
          className={`px-4 py-2 rounded-full text-sm ${
            !category ? 'bg-black text-white' : 'bg-gray-100'
          }`}
        >
          {text.allCategories}
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/${locale}/search?category=${cat.handle}`}
            className={`px-4 py-2 rounded-full text-sm ${
              category === cat.handle ? 'bg-black text-white' : 'bg-gray-100'
            }`}
          >
            {locale === 'ru' ? cat.titleRu : cat.title}
          </Link>
        ))}
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-12">{text.noProducts}</p>
      )}
    </div>
  );
}