export type Category = {
  id: string;
  name: string;
  icon?: string;
  order: number;
};

export type ProductExtra = {
  id: string;
  name: string;
  price: number;
};

export type ProductSize = {
  id: string;
  name: string;
  price: number;
};

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number; // Base price or starting price
  image: string;
  popular?: boolean;
  rating?: number;
  reviews?: number;
  sizes?: ProductSize[];
  extras?: ProductExtra[];
};

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  image: string;
  basePrice: number;
  size?: ProductSize;
  extras: ProductExtra[];
  quantity: number;
  totalPrice: number;
  notes?: string;
};

export type OrderStatus = 'Recebido' | 'Preparando' | 'Saiu para entrega' | 'Entregue' | 'Cancelado';

export type Order = {
  id: string;
  customerName: string;
  customerPhone: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
};

export type StoreSettings = {
  name: string;
  isOpen: boolean;
  deliveryTime: string;
  deliveryFee: number;
  whatsapp: string;
  logo: string;
};

export type AppState = {
  categories: Category[];
  products: Product[];
  cart: CartItem[];
  orders: Order[];
  settings: StoreSettings;
};
