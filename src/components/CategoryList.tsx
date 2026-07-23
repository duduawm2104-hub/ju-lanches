import { motion } from 'framer-motion';
import { Category } from '../types';

interface CategoryListProps {
  categories: Category[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export function CategoryList({ categories, activeCategoryId, onSelectCategory }: CategoryListProps) {
  return (
    <div className="flex overflow-x-auto hide-scrollbar gap-4 px-6 pb-4">
      {categories.map((category) => {
        const isActive = activeCategoryId === category.id;
        return (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(category.id)}
            className={`
              relative flex flex-col items-center justify-center min-w-[80px] h-[100px] rounded-2xl transition-all duration-300
              ${isActive 
                ? 'bg-white/10 border-orange-500/50 shadow-[0_0_20px_rgba(255,140,0,0.2)]' 
                : 'bg-white/5 border-white/5 hover:bg-white/10'
              }
              border
            `}
          >
            {isActive && (
              <motion.div 
                layoutId="category-active"
                className="absolute inset-0 bg-orange-500/10 rounded-2xl"
              />
            )}
            <span className="text-3xl mb-2 relative z-10">{category.icon}</span>
            <span className={`text-xs font-medium relative z-10 ${isActive ? 'text-orange-400' : 'text-gray-400'}`}>
              {category.name}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
