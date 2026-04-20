export interface ProductVariant {
  id: string;
  size?: string;
  color?: string;
  price: number;
  compareAtPrice?: number;
  stock: number;
  sku: string;
}

export interface ProductImage {
  url: string;
  altText?: string;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  titleRu?: string;
  description: string;
  descriptionRu?: string;
  descriptionHtml?: string;
  category: string;
  tags: string[];
  images: ProductImage[];
  variants: ProductVariant[];
  metafields?: Record<string, string>;
  availableForSale: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  size?: string;
  color?: string;
  inStock?: boolean;
  search?: string;
}

export interface Category {
  id: string;
  handle: string;
  title: string;
  titleRu?: string;
  description?: string;
  image?: ProductImage;
}