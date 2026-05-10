"use client";

import { useCart } from "components/cart/cart-context";
import { Product, ProductVariant as LocalVariant } from "lib/products";
import { Product as ShopifyProduct, ProductVariant as ShopifyVariant } from "lib/shopify/types";

function convertToShopifyVariant(variant: LocalVariant, product: Product): ShopifyVariant {
  const selectedOptions = [];
  if (variant.size) {
    selectedOptions.push({ name: "Size", value: variant.size });
  }
  if (variant.color) {
    selectedOptions.push({ name: "Color", value: variant.color });
  }

  return {
    id: variant.id,
    title: `${variant.size || ""} / ${variant.color || ""}`.replace(" / ", "").trim(),
    availableForSale: variant.stock > 0,
    selectedOptions,
    price: {
      amount: variant.price.toString(),
      currencyCode: "USD",
    },
  };
}

function convertToShopifyProduct(product: Product): ShopifyProduct {
  return {
    id: product.id,
    handle: product.handle,
    availableForSale: product.availableForSale,
    title: product.title,
    description: product.description,
    descriptionHtml: `<p>${product.description}</p>`,
    options: [],
    priceRange: {
      maxVariantPrice: { amount: "0", currencyCode: "USD" },
      minVariantPrice: { amount: "0", currencyCode: "USD" },
    },
    variants: product.variants.map((v) => convertToShopifyVariant(v, product)),
    featuredImage: product.images[0]
      ? {
          url: product.images[0].url,
          altText: product.images[0].altText || product.title,
          width: 800,
          height: 1200,
        }
      : { url: "", altText: "", width: 0, height: 0 },
    images: product.images.map((img) => ({
      url: img.url,
      altText: img.altText || product.title,
      width: 800,
      height: 1200,
    })),
    seo: { title: product.title, description: product.description },
    tags: product.tags,
    updatedAt: product.updatedAt,
  };
}

interface AddToCartButtonProps {
  product: Product;
  selectedVariant: LocalVariant | undefined;
  locale: string;
  disabled?: boolean;
}

export default function AddToCartButton({
  product,
  selectedVariant,
  locale,
  disabled = false,
}: AddToCartButtonProps) {
  const { addCartItem } = useCart();

  const text = {
    en: {
      addToCart: "Add to Cart",
      outOfStock: "Out of Stock",
    },
    ru: {
      addToCart: "В корзину",
      outOfStock: "Нет в наличии",
    },
  };

  const t = text[locale as "en" | "ru"] || text.en;

  const handleClick = () => {
    if (!selectedVariant || selectedVariant.stock <= 0) return;

    const shopifyVariant = convertToShopifyVariant(selectedVariant, product);
    const shopifyProduct = convertToShopifyProduct(product);

    addCartItem(shopifyVariant, shopifyProduct);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || selectedVariant.stock <= 0}
      className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition disabled:bg-gray-300"
    >
      {product.availableForSale && selectedVariant.stock > 0
        ? t.addToCart
        : t.outOfStock}
    </button>
  );
}
