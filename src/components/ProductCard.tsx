import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus, Star } from 'lucide-react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/product/${product.id}`)}
      className="relative flex flex-col bg-white/5 border border-white/10 rounded-[28px] p-4 cursor-pointer overflow-hidden group hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(255,140,0,0.15)]"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[50px] group-hover:bg-orange-500/20 transition-all duration-500" />

      {/* Top Actions */}
      <div className="absolute top-4 left-4 z-10">
        {product.popular && (
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/10 px-2 py-1 rounded-full">
            <span className="text-[10px] font-medium text-orange-400">🔥 Popular</span>
          </div>
        )}
      </div>
      <button className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-gray-400 hover:text-red-500 transition-colors">
        <Heart className="w-4 h-4" />
      </button>

      {/* Image */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 mt-8">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E11]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1 group-hover:text-orange-400 transition-colors">{product.name}</h3>
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            <span className="text-xs text-gray-300 font-medium">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
        )}
        <p className="text-xs text-gray-400 line-clamp-2 mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-white">
            <span className="text-orange-500 text-sm mr-1">R$</span>
            {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_0_15px_rgba(255,140,0,0.4)] group-hover:bg-orange-400 group-hover:scale-110 transition-all">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
