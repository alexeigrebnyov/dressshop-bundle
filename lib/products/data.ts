import { Product, Category } from './types';

export const categories: Category[] = [
  { id: 'cat-1', handle: 'dresses', title: 'Dresses', titleRu: 'Платья' },
  { id: 'cat-2', handle: 'tops', title: 'Tops', titleRu: 'Топы' },
  { id: 'cat-3', handle: 'bottoms', title: 'Bottoms', titleRu: 'Низ' },
  { id: 'cat-4', handle: 'outerwear', title: 'Outerwear', titleRu: 'Верхняя одежда' },
  { id: 'cat-5', handle: 'accessories', title: 'Accessories', titleRu: 'Аксессуары' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const colors = [
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Navy', hex: '#000080' },
  { name: 'Beige', hex: '#F5F5DC' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Red', hex: '#FF0000' },
  { name: 'Green', hex: '#008000' },
];

const clothingProducts: Omit<Product, 'id' | 'handle' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Elegant Evening Dress',
    titleRu: 'Элегантное вечернее платье',
    description: 'A stunning evening dress perfect for special occasions. Features a flattering silhouette with subtle sparkle details.',
    descriptionRu: 'Потрясающее вечернее платье для особых случаев. Флагманский силуэт с легкими блестящими деталями.',
    category: 'dresses',
    tags: ['evening', 'elegant', 'formal'],
    images: [
      { url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800', altText: 'Elegant Evening Dress' },
    ],
    variants: [
      { id: 'v-1', size: 'S', color: 'Black', price: 129.99, stock: 15, sku: 'ED-BK-S' },
      { id: 'v-2', size: 'M', color: 'Black', price: 129.99, stock: 20, sku: 'ED-BK-M' },
      { id: 'v-3', size: 'L', color: 'Black', price: 129.99, stock: 18, sku: 'ED-BK-L' },
      { id: 'v-4', size: 'S', color: 'Navy', price: 129.99, stock: 12, sku: 'ED-NV-S' },
      { id: 'v-5', size: 'M', color: 'Navy', price: 129.99, stock: 14, sku: 'ED-NV-M' },
    ],
    availableForSale: true,
  },
  {
    title: 'Casual Summer Dress',
    titleRu: 'Летнее платье на каждый день',
    description: 'Light and comfortable summer dress perfect for warm weather. Flowy design with floral pattern.',
    descriptionRu: 'Легкое и удобное летнее платье для теплой погоды. Струящийся дизайн с цветочным принтом.',
    category: 'dresses',
    tags: ['summer', 'casual', 'floral'],
    images: [
      { url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800', altText: 'Casual Summer Dress' },
    ],
    variants: [
      { id: 'v-6', size: 'XS', color: 'Pink', price: 79.99, stock: 25, sku: 'CSD-PK-XS' },
      { id: 'v-7', size: 'S', color: 'Pink', price: 79.99, stock: 30, sku: 'CSD-PK-S' },
      { id: 'v-8', size: 'M', color: 'Pink', price: 79.99, stock: 28, sku: 'CSD-PK-M' },
      { id: 'v-9', size: 'S', color: 'Beige', price: 79.99, stock: 20, sku: 'CSD-BG-S' },
      { id: 'v-10', size: 'M', color: 'Beige', price: 79.99, stock: 22, sku: 'CSD-BG-M' },
    ],
    availableForSale: true,
  },
  {
    title: 'Silk Blouse',
    titleRu: 'Шелковая блузка',
    description: 'Luxurious silk blouse with elegant drape. Perfect for office or evening wear.',
    descriptionRu: 'Роскошная шелковая блузка с элегантной драпировкой. Идеально для офиса или вечера.',
    category: 'tops',
    tags: ['silk', 'elegant', 'office'],
    images: [
      { url: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800', altText: 'Silk Blouse' },
    ],
    variants: [
      { id: 'v-11', size: 'S', color: 'White', price: 89.99, stock: 18, sku: 'SB-WH-S' },
      { id: 'v-12', size: 'M', color: 'White', price: 89.99, stock: 22, sku: 'SB-WH-M' },
      { id: 'v-13', size: 'L', color: 'White', price: 89.99, stock: 16, sku: 'SB-WH-L' },
      { id: 'v-14', size: 'S', color: 'Black', price: 89.99, stock: 14, sku: 'SB-BK-S' },
      { id: 'v-15', size: 'M', color: 'Black', price: 89.99, stock: 20, sku: 'SB-BK-M' },
    ],
    availableForSale: true,
  },
  {
    title: 'Cotton T-Shirt',
    titleRu: 'Хлопковая футболка',
    description: 'Soft organic cotton t-shirt. Comfortable fit for everyday wear.',
    descriptionRu: 'Мягкая футболка из органического хлопка. Удобная посадка для каждого дня.',
    category: 'tops',
    tags: ['cotton', 'casual', 'organic'],
    images: [
      { url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800', altText: 'Cotton T-Shirt' },
    ],
    variants: [
      { id: 'v-16', size: 'XS', color: 'White', price: 29.99, stock: 50, sku: 'CT-WH-XS' },
      { id: 'v-17', size: 'S', color: 'White', price: 29.99, stock: 60, sku: 'CT-WH-S' },
      { id: 'v-18', size: 'M', color: 'White', price: 29.99, stock: 55, sku: 'CT-WH-M' },
      { id: 'v-19', size: 'L', color: 'White', price: 29.99, stock: 45, sku: 'CT-WH-L' },
      { id: 'v-20', size: 'S', color: 'Black', price: 29.99, stock: 50, sku: 'CT-BK-S' },
      { id: 'v-21', size: 'M', color: 'Black', price: 29.99, stock: 52, sku: 'CT-BK-M' },
    ],
    availableForSale: true,
  },
  {
    title: 'High-Waist Trousers',
    titleRu: 'Брюки с высокой талией',
    description: 'Elegant high-waist trousers with wide leg. Perfect for professional look.',
    descriptionRu: 'Элегантные брюки с высокой талией и широкими штанинами. Идеально для делового образа.',
    category: 'bottoms',
    tags: ['office', 'elegant', 'wide-leg'],
    images: [
      { url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800', altText: 'High-Waist Trousers' },
    ],
    variants: [
      { id: 'v-22', size: 'S', color: 'Black', price: 69.99, stock: 25, sku: 'HWT-BK-S' },
      { id: 'v-23', size: 'M', color: 'Black', price: 69.99, stock: 30, sku: 'HWT-BK-M' },
      { id: 'v-24', size: 'L', color: 'Black', price: 69.99, stock: 20, sku: 'HWT-BK-L' },
      { id: 'v-25', size: 'S', color: 'Navy', price: 69.99, stock: 18, sku: 'HWT-NV-S' },
      { id: 'v-26', size: 'M', color: 'Navy', price: 69.99, stock: 22, sku: 'HWT-NV-M' },
    ],
    availableForSale: true,
  },
  {
    title: 'Denim Jeans',
    titleRu: 'Джинсы',
    description: 'Classic denim jeans with comfortable stretch. Timeless style for any occasion.',
    descriptionRu: 'Классические джинсы с комфортной эластичностью. Вневременной стиль для любого случая.',
    category: 'bottoms',
    tags: ['denim', 'casual', 'classic'],
    images: [
      { url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800', altText: 'Denim Jeans' },
    ],
    variants: [
      { id: 'v-27', size: 'S', color: 'Navy', price: 59.99, stock: 35, sku: 'DJ-NV-S' },
      { id: 'v-28', size: 'M', color: 'Navy', price: 59.99, stock: 40, sku: 'DJ-NV-M' },
      { id: 'v-29', size: 'L', color: 'Navy', price: 59.99, stock: 30, sku: 'DJ-NV-L' },
      { id: 'v-30', size: 'S', color: 'Black', price: 59.99, stock: 25, sku: 'DJ-BK-S' },
      { id: 'v-31', size: 'M', color: 'Black', price: 59.99, stock: 28, sku: 'DJ-BK-M' },
    ],
    availableForSale: true,
  },
  {
    title: 'Wool Coat',
    titleRu: 'Шерстяное пальто',
    description: 'Luxurious wool blend coat with belt. Perfect for autumn and winter.',
    descriptionRu: 'Роскошное пальто из шерстяной смеси с поясом. Идеально для осени и зимы.',
    category: 'outerwear',
    tags: ['wool', 'winter', 'elegant'],
    images: [
      { url: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800', altText: 'Wool Coat' },
    ],
    variants: [
      { id: 'v-32', size: 'S', color: 'Beige', price: 199.99, stock: 12, sku: 'WC-BG-S' },
      { id: 'v-33', size: 'M', color: 'Beige', price: 199.99, stock: 15, sku: 'WC-BG-M' },
      { id: 'v-34', size: 'L', color: 'Beige', price: 199.99, stock: 10, sku: 'WC-BG-L' },
      { id: 'v-35', size: 'S', color: 'Black', price: 199.99, stock: 8, sku: 'WC-BK-S' },
      { id: 'v-36', size: 'M', color: 'Black', price: 199.99, stock: 14, sku: 'WC-BK-M' },
    ],
    availableForSale: true,
  },
  {
    title: 'Leather Handbag',
    titleRu: 'Кожаная сумка',
    description: 'Genuine leather handbag with adjustable strap. Spacious interior for everyday use.',
    descriptionRu: 'Сумка из натуральной кожи с регулируемым ремнем. Просторный интерьер для повседневного использования.',
    category: 'accessories',
    tags: ['leather', 'handbag', 'everyday'],
    images: [
      { url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800', altText: 'Leather Handbag' },
    ],
    variants: [
      { id: 'v-37', size: 'M', color: 'Black', price: 149.99, stock: 20, sku: 'LH-BK-M' },
      { id: 'v-38', size: 'M', color: 'Beige', price: 149.99, stock: 18, sku: 'LH-BG-M' },
      { id: 'v-39', size: 'M', color: 'Red', price: 159.99, stock: 15, sku: 'LH-RD-M' },
    ],
    availableForSale: true,
  },
  {
    title: 'Cashmere Scarf',
    titleRu: 'Кашемировый шарф',
    description: 'Soft cashmere scarf with fringe details. Perfect accessory for cold weather.',
    descriptionRu: 'Мягкий кашемировый шарф с бахромой. Идеальный аксессуар для холодной погоды.',
    category: 'accessories',
    tags: ['cashmere', 'winter', 'scarf'],
    images: [
      { url: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800', altText: 'Cashmere Scarf' },
    ],
    variants: [
      { id: 'v-40', size: 'M', color: 'Beige', price: 79.99, stock: 30, sku: 'CS-BG-M' },
      { id: 'v-41', size: 'M', color: 'Pink', price: 79.99, stock: 25, sku: 'CS-PK-M' },
      { id: 'v-42', size: 'M', color: 'Navy', price: 79.99, stock: 22, sku: 'CS-NV-M' },
    ],
    availableForSale: true,
  },
  {
    title: 'Wrap Dress',
    titleRu: 'Платье с запахом',
    description: 'Flattering wrap dress with V-neck. Versatile style for work or weekend.',
    descriptionRu: 'Приталенный wrap-dress с V-образным вырезом. Универсальный стиль для работы или выходных.',
    category: 'dresses',
    tags: ['wrap', 'versatile', 'flattering'],
    images: [
      { url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800', altText: 'Wrap Dress' },
    ],
    variants: [
      { id: 'v-43', size: 'XS', color: 'Navy', price: 99.99, stock: 18, sku: 'WRD-NV-XS' },
      { id: 'v-44', size: 'S', color: 'Navy', price: 99.99, stock: 22, sku: 'WRD-NV-S' },
      { id: 'v-45', size: 'M', color: 'Navy', price: 99.99, stock: 20, sku: 'WRD-NV-M' },
      { id: 'v-46', size: 'S', color: 'Green', price: 99.99, stock: 16, sku: 'WRD-GR-S' },
      { id: 'v-47', size: 'M', color: 'Green', price: 99.99, stock: 18, sku: 'WRD-GR-M' },
    ],
    availableForSale: true,
  },
];

function generateProducts(): Product[] {
  const now = new Date().toISOString();
  return clothingProducts.map((product, index) => ({
    ...product,
    id: `prod-${index + 1}`,
    handle: product.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    createdAt: now,
    updatedAt: now,
  }));
}

export const products = generateProducts();

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
      (p) =>
          p.title.toLowerCase().includes(lowerQuery) ||
          p.titleRu?.toLowerCase().includes(lowerQuery) ||        // Добавить
          p.description.toLowerCase().includes(lowerQuery) ||
          p.descriptionRu?.toLowerCase().includes(lowerQuery) ||  // Добавить
          p.tags.some((t) => t.includes(lowerQuery))
  );
}


export function getAllProducts(): Product[] {
  return products;
}