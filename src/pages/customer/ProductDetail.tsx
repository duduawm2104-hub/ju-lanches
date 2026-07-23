import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Heart, Minus, Plus } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { ProductSize, ProductExtra } from '../../types';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useAppContext();
  
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<ProductSize | undefined>(product?.sizes?.[0]);
  const [selectedExtras, setSelectedExtras] = useState<ProductExtra[]>([]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="text-white p-6">Produto não encontrado</div>;

  const toggleExtra = (extra: ProductExtra) => {
    setSelectedExtras(prev => 
      prev.find(e => e.id === extra.id) 
        ? prev.filter(e => e.id !== extra.id)
        : [...prev, extra]
    );
  };

  const basePrice = selectedSize ? selectedSize.price : product.price;
  const extrasTotal = selectedExtras.reduce((sum, extra) => sum + extra.price, 0);
  const unitPrice = basePrice + extrasTotal;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart({
      id: Math.random().toString(36).substr(2, 9),
      productId: product.id,
      name: product.name,
      image: product.image,
      basePrice: unitPrice,
      size: selectedSize,
      extras: selectedExtras,
      quantity,
      totalPrice
    });
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#0E0E11] pb-32">
      {/* Header Actions */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-between p-6">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[50vh]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E11] via-[#0E0E11]/50 to-transparent" />
      </div>

      <div className="px-6 -mt-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-[50px]" />

          <div className="flex justify-between items-start mb-2">
            <div>
              {product.popular && (
                <span className="inline-block bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-1 rounded-md mb-2">
                  🔥 Mais Pedido
                </span>
              )}
              <h1 className="text-2xl font-bold text-white">{product.name}</h1>
            </div>
            <span className="text-xl font-bold text-orange-400">
              R$ {product.price.toFixed(2)}
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">Tamanho</h3>
              <div className="flex gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedSize?.id === size.id 
                        ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(255,140,0,0.4)]' 
                        : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Extras */}
          {product.extras && product.extras.length > 0 && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">Adicionais</h3>
              <div className="space-y-3">
                {product.extras.map(extra => {
                  const isSelected = selectedExtras.some(e => e.id === extra.id);
                  return (
                    <div key={extra.id} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{extra.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500 text-sm">+ R$ {extra.price.toFixed(2)}</span>
                        <button
                          onClick={() => toggleExtra(extra)}
                          className={`w-12 h-6 rounded-full transition-colors relative flex items-center ${
                            isSelected ? 'bg-orange-500' : 'bg-white/10'
                          }`}
                        >
                          <motion.div
                            layout
                            className={`w-5 h-5 rounded-full bg-white absolute ${
                              isSelected ? 'right-0.5' : 'left-0.5'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 p-6 bg-[#0E0E11]/80 backdrop-blur-xl border-t border-white/5 z-50 flex items-center gap-4">
        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-2 w-32 h-14">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-white font-bold">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="flex-1 h-14 rounded-2xl bg-orange-500 text-white font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,140,0,0.3)] hover:bg-orange-400 transition-all"
        >
          <span>Adicionar</span>
          <span className="w-1 h-1 rounded-full bg-white/50 mx-1" />
          <span>R$ {totalPrice.toFixed(2)}</span>
        </motion.button>
      </div>
    </div>
  );
}
