import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../../components/Header';
import { CategoryList } from '../../components/CategoryList';
import { ProductCard } from '../../components/ProductCard';
import { CartSidebar } from '../../components/CartSidebar';
import { useAppContext } from '../../context/AppContext';

export function Home() {
  const { categories, products } = useAppContext();
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products.filter(p => p.categoryId === activeCategory);
  const popularProducts = products.filter(p => p.popular);

  return (
    <div className="min-h-screen pb-24">
      <Header onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="pt-6">
        {/* Categories */}
        <section>
          <CategoryList 
            categories={categories} 
            activeCategoryId={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />
        </section>

        {/* Hero Banner */}
        <section className="px-6 my-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full h-[200px] rounded-3xl overflow-hidden group cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1200" 
              alt="Promo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E11]/90 to-transparent" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-center w-2/3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">🔥 Oferta Limitada</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-1 leading-tight">Combo<br/><span className="text-orange-400">Especial</span></h2>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-orange-500 text-white text-sm font-semibold py-2 px-6 rounded-full w-fit shadow-[0_0_20px_rgba(255,140,0,0.4)]"
              >
                Comprar Agora
              </motion.button>
            </div>

            {/* Price Badge */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-[#0E0E11]/80 backdrop-blur-md border border-white/10 rounded-full flex flex-col items-center justify-center transform rotate-12">
              <span className="text-lg font-bold text-white">20%</span>
              <span className="text-[10px] text-gray-400">OFF</span>
            </div>
          </motion.div>
        </section>

        {/* Popular Now (Only show if filtering by a category that has popular, or just always show popular block?) */}
        {/* Looking at the reference, Popular Now is below the banner */}
        
        <section className="px-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Mais Populares</h2>
            <button className="text-sm text-gray-400 hover:text-orange-400 transition-colors">Ver todos</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Selected Category Products */}
        <section className="px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">
              {categories.find(c => c.id === activeCategory)?.name || 'Produtos'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-500">
                Nenhum produto encontrado nesta categoria.
              </div>
            )}
          </div>
        </section>
      </main>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
