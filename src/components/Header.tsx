import { motion } from 'framer-motion';
import { ShoppingBag, Search, SlidersHorizontal, User } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
  const { settings, cart } = useAppContext();
  
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 bg-[#0E0E11]/80 backdrop-blur-xl border-b border-white/5 pt-6 pb-4 px-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(255,140,0,0.2)]">
            <img src={settings.logo} alt={settings.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {settings.name}
            </h1>
            <div className="flex items-center gap-2 text-xs">
              <span className={`w-2 h-2 rounded-full ${settings.isOpen ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500'}`} />
              <span className="text-gray-400">{settings.isOpen ? 'Aberto agora' : 'Fechado'}</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">{settings.deliveryTime}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-orange-500 text-[10px] font-bold rounded-full shadow-[0_0_10px_rgba(255,140,0,0.5)]"
              >
                {cartItemCount}
              </motion.span>
            )}
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input 
          type="text" 
          placeholder="Pesquisar seu prato favorito" 
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:shadow-[0_0_15px_rgba(255,140,0,0.1)] transition-all"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>
    </motion.header>
  );
}
