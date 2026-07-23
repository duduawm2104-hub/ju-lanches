import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppState, CartItem, Category, Order, Product, StoreSettings } from '../types';
import { initialCategories, initialProducts, initialSettings } from '../data/mockData';

interface AppContextType extends AppState {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  updateSettings: (settings: StoreSettings) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addCategory: (category: Category) => void;
  updateCategory: (category: Category) => void;
  deleteCategory: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem('categories_v3');
    return saved ? JSON.parse(saved) : initialCategories;
  });

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('products_v3');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [settings, setSettings] = useState<StoreSettings>(() => {
    const saved = localStorage.getItem('settings_v3');
    return saved ? JSON.parse(saved) : initialSettings;
  });

  useEffect(() => {
    localStorage.setItem('categories_v3', JSON.stringify(categories));
    localStorage.setItem('products_v3', JSON.stringify(products));
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('settings_v3', JSON.stringify(settings));
  }, [categories, products, cart, orders, settings]);

  const addToCart = (item: CartItem) => setCart(prev => [...prev, item]);
  const removeFromCart = (id: string) => setCart(prev => prev.filter(item => item.id !== id));
  const updateCartItemQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity, totalPrice: item.basePrice * quantity } : item));
  };
  const clearCart = () => setCart([]);

  const addOrder = (order: Order) => setOrders(prev => [order, ...prev]);
  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
  };

  const updateSettings = (newSettings: StoreSettings) => setSettings(newSettings);

  const addProduct = (product: Product) => setProducts(prev => [...prev, product]);
  const updateProduct = (product: Product) => setProducts(prev => prev.map(p => p.id === product.id ? product : p));
  const deleteProduct = (id: string) => setProducts(prev => prev.filter(p => p.id !== id));

  const addCategory = (category: Category) => setCategories(prev => [...prev, category]);
  const updateCategory = (category: Category) => setCategories(prev => prev.map(c => c.id === category.id ? category : c));
  const deleteCategory = (id: string) => setCategories(prev => prev.filter(c => c.id !== id));

  return (
    <AppContext.Provider value={{
      categories, products, cart, orders, settings,
      addToCart, removeFromCart, updateCartItemQuantity, clearCart,
      addOrder, updateOrderStatus, updateSettings,
      addProduct, updateProduct, deleteProduct,
      addCategory, updateCategory, deleteCategory
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
