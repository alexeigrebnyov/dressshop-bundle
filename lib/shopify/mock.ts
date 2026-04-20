import { Cart, CartItem, ProductVariant, Product } from "./types";

// Mock products for search/demo
export const mockProducts: Product[] = [
  {
    id: "mock-product-1",
    handle: "elegant-dress",
    title: "Elegant Evening Dress",
    description: "A beautiful evening dress perfect for special occasions.",
    descriptionHtml: "<p>A beautiful evening dress perfect for special occasions.</p>",
    availableForSale: true,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      altText: "Elegant Evening Dress",
      width: 800,
      height: 1200,
    },
    images: [{ url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800", altText: "Elegant Evening Dress", width: 800, height: 1200 }],
    variants: [
      {
        id: "mock-variant-1-s",
        title: "Small",
        availableForSale: true,
        price: { amount: "89.99", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Small" }],
      },
      {
        id: "mock-variant-1-m",
        title: "Medium",
        availableForSale: true,
        price: { amount: "89.99", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Medium" }],
      },
      {
        id: "mock-variant-1-l",
        title: "Large",
        availableForSale: true,
        price: { amount: "89.99", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Large" }],
      },
    ],
    options: [{ name: "Size", values: ["Small", "Medium", "Large"] }],
    tags: ["dress", "evening", "elegant"],
    seo: { title: "Elegant Evening Dress", description: "A beautiful evening dress perfect for special occasions." },
    priceRange: {
      minVariantPrice: { amount: "89.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "89.99", currencyCode: "USD" },
    },
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-product-2",
    handle: "casual-blouse",
    title: "Casual Summer Blouse",
    description: "Light and comfortable blouse for everyday wear.",
    descriptionHtml: "<p>Light and comfortable blouse for everyday wear.</p>",
    availableForSale: true,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800",
      altText: "Casual Summer Blouse",
      width: 800,
      height: 1200,
    },
    images: [{ url: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800", altText: "Casual Summer Blouse", width: 800, height: 1200 }],
    variants: [
      {
        id: "mock-variant-2-s",
        title: "Small",
        availableForSale: true,
        price: { amount: "45.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Small" }],
      },
      {
        id: "mock-variant-2-m",
        title: "Medium",
        availableForSale: true,
        price: { amount: "45.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Medium" }],
      },
    ],
    options: [{ name: "Size", values: ["Small", "Medium"] }],
    tags: ["blouse", "casual", "summer"],
    priceRange: {
      minVariantPrice: { amount: "45.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "45.00", currencyCode: "USD" },
    },
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-product-3",
    handle: "designer-jeans",
    title: "Designer Jeans",
    description: "Premium quality designer jeans with perfect fit.",
    descriptionHtml: "<p>Premium quality designer jeans with perfect fit.</p>",
    availableForSale: true,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
      altText: "Designer Jeans",
      width: 800,
      height: 1200,
    },
    images: [{ url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800", altText: "Designer Jeans", width: 800, height: 1200 }],
    variants: [
      {
        id: "mock-variant-3-28",
        title: "28",
        availableForSale: true,
        price: { amount: "120.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "28" }],
      },
      {
        id: "mock-variant-3-30",
        title: "30",
        availableForSale: true,
        price: { amount: "120.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "30" }],
      },
      {
        id: "mock-variant-3-32",
        title: "32",
        availableForSale: true,
        price: { amount: "120.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "32" }],
      },
    ],
    options: [{ name: "Size", values: ["28", "30", "32"] }],
    tags: ["jeans", "designer", "premium"],
    priceRange: {
      minVariantPrice: { amount: "120.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "120.00", currencyCode: "USD" },
    },
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-product-4",
    handle: "silk-scarf",
    title: "Luxury Silk Scarf",
    description: "Handcrafted silk scarf with elegant pattern.",
    descriptionHtml: "<p>Handcrafted silk scarf with elegant pattern.</p>",
    availableForSale: true,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
      altText: "Luxury Silk Scarf",
      width: 800,
      height: 800,
    },
    images: [{ url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800", altText: "Luxury Silk Scarf", width: 800, height: 800 }],
    variants: [
      {
        id: "mock-variant-4-one",
        title: "Default Title",
        availableForSale: true,
        price: { amount: "75.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Default Title" }],
      },
    ],
    options: [{ name: "Size", values: ["Default Title"] }],
    tags: ["scarf", "silk", "luxury"],
    priceRange: {
      minVariantPrice: { amount: "75.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "75.00", currencyCode: "USD" },
    },
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-product-5",
    handle: "leather-handbag",
    title: "Italian Leather Handbag",
    description: "Genuine Italian leather handbag with classic design.",
    descriptionHtml: "<p>Genuine Italian leather handbag with classic design.</p>",
    availableForSale: true,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
      altText: "Italian Leather Handbag",
      width: 800,
      height: 800,
    },
    images: [{ url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800", altText: "Italian Leather Handbag", width: 800, height: 800 }],
    variants: [
      {
        id: "mock-variant-5-black",
        title: "Black",
        availableForSale: true,
        price: { amount: "199.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Color", value: "Black" }],
      },
      {
        id: "mock-variant-5-brown",
        title: "Brown",
        availableForSale: true,
        price: { amount: "199.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Color", value: "Brown" }],
      },
    ],
    options: [{ name: "Color", values: ["Black", "Brown"] }],
    tags: ["handbag", "leather", "italian"],
    priceRange: {
      minVariantPrice: { amount: "199.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "199.00", currencyCode: "USD" },
    },
    updatedAt: new Date().toISOString(),
  },
  {
    id: "mock-product-6",
    handle: "wool-coat",
    title: "Winter Wool Coat",
    description: "Warm and stylish wool coat for cold weather.",
    descriptionHtml: "<p>Warm and stylish wool coat for cold weather.</p>",
    availableForSale: true,
    featuredImage: {
      url: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800",
      altText: "Winter Wool Coat",
      width: 800,
      height: 1200,
    },
    images: [{ url: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800", altText: "Winter Wool Coat", width: 800, height: 1200 }],
    variants: [
      {
        id: "mock-variant-6-s",
        title: "Small",
        availableForSale: true,
        price: { amount: "250.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Small" }],
      },
      {
        id: "mock-variant-6-m",
        title: "Medium",
        availableForSale: true,
        price: { amount: "250.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Medium" }],
      },
      {
        id: "mock-variant-6-l",
        title: "Large",
        availableForSale: true,
        price: { amount: "250.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Large" }],
      },
    ],
    options: [{ name: "Size", values: ["Small", "Medium", "Large"] }],
    tags: ["coat", "winter", "wool"],
    priceRange: {
      minVariantPrice: { amount: "250.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "250.00", currencyCode: "USD" },
    },
    updatedAt: new Date().toISOString(),
  },
];

// In-memory mock cart state
let mockCart: Cart = {
  id: "mock-cart-id",
  checkoutUrl: "#checkout",
  totalQuantity: 0,
  lines: [],
  cost: {
    subtotalAmount: { amount: "0", currencyCode: "USD" },
    totalAmount: { amount: "0", currencyCode: "USD" },
    totalTaxAmount: { amount: "0", currencyCode: "USD" },
  },
};

function calculateItemCost(quantity: number, price: string): string {
  return (Number(price) * quantity).toString();
}

function recalculateCartTotals(lines: CartItem[]): Cart["cost"] {
  const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = lines.reduce(
    (sum, item) => sum + Number(item.cost.totalAmount.amount),
    0
  );
  const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? "USD";

  return {
    subtotalAmount: { amount: totalAmount.toString(), currencyCode },
    totalAmount: { amount: totalAmount.toString(), currencyCode },
    totalTaxAmount: { amount: "0", currencyCode },
  };
}

export function createMockCart(): Cart {
  return { ...mockCart, lines: [...mockCart.lines] };
}

export function getMockCart(): Cart {
  return { ...mockCart, lines: [...mockCart.lines] };
}

export function addToMockCart(
  lines: { merchandiseId: string; quantity: number }[],
  variant: ProductVariant,
  product: Product
): Cart {
  const newLines = [...mockCart.lines];

  for (const line of lines) {
    const existingIndex = newLines.findIndex(
      (item) => item.merchandise.id === line.merchandiseId
    );

    if (existingIndex >= 0) {
      const existing = newLines[existingIndex];
      const newQuantity = existing.quantity + line.quantity;
      newLines[existingIndex] = {
        ...existing,
        quantity: newQuantity,
        cost: {
          ...existing.cost,
          totalAmount: {
            ...existing.cost.totalAmount,
            amount: calculateItemCost(
              newQuantity,
              existing.merchandise.selectedOptions[0]?.value === "Default Title"
                ? existing.merchandise.product?.featuredImage?.url
                  ? "10.00"
                  : "10.00"
                : variant.price.amount
            ),
          },
        },
      };
    } else {
      const newItem: CartItem = {
        id: `mock-line-${Date.now()}`,
        quantity: line.quantity,
        cost: {
          totalAmount: {
            amount: calculateItemCost(line.quantity, variant.price.amount),
            currencyCode: variant.price.currencyCode,
          },
        },
        merchandise: {
          id: variant.id,
          title: variant.title,
          selectedOptions: variant.selectedOptions,
          product: {
            id: product.id,
            handle: product.handle,
            title: product.title,
            featuredImage: product.featuredImage,
          },
        },
      };
      newLines.push(newItem);
    }
  }

  mockCart = {
    ...mockCart,
    lines: newLines,
    totalQuantity: newLines.reduce((sum, item) => sum + item.quantity, 0),
    cost: recalculateCartTotals(newLines),
  };

  return { ...mockCart, lines: [...mockCart.lines] };
}

export function removeFromMockCart(lineIds: string[]): Cart {
  mockCart = {
    ...mockCart,
    lines: mockCart.lines.filter((line) => !lineIds.includes(line.id)),
  };
  mockCart.totalQuantity = mockCart.lines.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  mockCart.cost = recalculateCartTotals(mockCart.lines);

  return { ...mockCart, lines: [...mockCart.lines] };
}

export function updateMockCart(
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Cart {
  for (const update of lines) {
    const index = mockCart.lines.findIndex((line) => line.id === update.id);
    if (index >= 0) {
      if (update.quantity === 0) {
        mockCart.lines.splice(index, 1);
      } else {
        mockCart.lines[index] = {
          ...mockCart.lines[index],
          quantity: update.quantity,
          cost: {
            ...mockCart.lines[index].cost,
            totalAmount: {
              ...mockCart.lines[index].cost.totalAmount,
              amount: calculateItemCost(
                update.quantity,
                mockCart.lines[index].cost.totalAmount.amount
              ),
            },
          },
        };
      }
    }
  }

  mockCart.totalQuantity = mockCart.lines.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  mockCart.cost = recalculateCartTotals(mockCart.lines);

  return { ...mockCart, lines: [...mockCart.lines] };
}

export function searchMockProducts(query?: string): Product[] {
  if (!query) return mockProducts;

  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getMockProducts(): Product[] {
  return mockProducts;
}

export function isMockMode(): boolean {
  return (
    process.env.SHOPIFY_STORE_DOMAIN?.includes("mock-store") ||
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN === "mock-token"
  );
}