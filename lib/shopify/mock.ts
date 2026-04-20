import { Cart } from "./types";

export function createMockCart(): Cart {
  return {
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
}

export function isMockMode(): boolean {
  return (
    process.env.SHOPIFY_STORE_DOMAIN?.includes("mock-store") ||
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN === "mock-token"
  );
}