import { motion } from 'framer-motion';
import { Home, Tag, ShoppingBag, Heart } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'offers', icon: Tag, label: 'Offers', path: '/offers' },
    { id: 'orders', icon: ShoppingBag, label: 'Orders', path: '/orders' },
    { id: 'favorite', icon: Heart, label: 'Favorite', path: '/favorites' },
  ];

  // Only show on customer side
  if (location.pathname.startsWith('/admin')) return null;
  // Don't show on product detail
  if (location.pathname.startsWith('/product')) return null;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 inset-x-0 z-40 bg-[#0E0E11]/90 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex justify-between items-center pb-safe"
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.id === 'home' && location.pathname === '/');
        const Icon = item.icon;
        
        return (
          <Link key={item.id} to={item.path} className="flex flex-col items-center gap-1">
            <div className={`relative p-2 rounded-xl transition-colors ${isActive ? 'text-orange-500' : 'text-gray-500 hover:text-gray-300'}`}>
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-active"
                  className="absolute inset-0 bg-orange-500/10 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className="w-6 h-6 relative z-10" />
            </div>
            <span className={`text-[10px] font-medium ${isActive ? 'text-orange-500' : 'text-gray-500'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </motion.div>
  );
}
