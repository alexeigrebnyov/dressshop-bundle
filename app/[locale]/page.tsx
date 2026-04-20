import Link from 'next/link';
import { getLocaleFromPath, t } from 'lib/i18n';
import { getAllProducts, categories } from 'lib/products';
import ProductCard from '@/components/product/product-card';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = getLocaleFromPath(`/${localeParam}/`);
  const products = getAllProducts();
  const featuredProducts = products.slice(0, 6);
  const translations = {
    en: {
      heroTitle: 'Discover Your Style',
      heroSubtitle: 'Premium women\'s clothing for the modern wardrobe',
      shopNow: 'Shop Now',
      featuredTitle: 'Featured Products',
      categoriesTitle: 'Shop by Category',
    },
    ru: {
      heroTitle: 'Открой свой стиль',
      heroSubtitle: 'Премиальная женская одежда для современного гардероба',
      shopNow: 'В магазин',
      featuredTitle: 'Рекомендуемые товары',
      categoriesTitle: 'Категории',
    },
  };

  const text = translations[locale];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">{text.heroTitle}</h1>
          <p className="text-xl text-gray-600 mb-8">{text.heroSubtitle}</p>
          <Link
            href={`/${locale}/search`}
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            {text.shopNow}
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{text.categoriesTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/${locale}/search?category=${category.handle}`}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">
                  {locale === 'ru' ? category.titleRu : category.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{text.featuredTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Language Switcher */}
      <section className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto flex justify-center gap-4">
          <Link
            href="/en"
            className={`px-4 py-2 rounded ${locale === 'en' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            English
          </Link>
          <Link
            href="/ru"
            className={`px-4 py-2 rounded ${locale === 'ru' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            Русский
          </Link>
        </div>
      </section>
    </div>
  );
}