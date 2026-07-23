import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Package, 
  ListTree, 
  ShoppingBag, 
  Settings,
  Users,
  Image as ImageIcon,
  Clock,
  LogOut
} from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export function AdminLayout() {
  const location = useLocation();
  const { settings } = useAppContext();

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/orders', icon: ShoppingBag, label: 'Pedidos' },
    { path: '/admin/products', icon: Package, label: 'Produtos' },
    { path: '/admin/categories', icon: ListTree, label: 'Categorias' },
    { path: '/admin/banners', icon: ImageIcon, label: 'Banners' },
    { path: '/admin/customers', icon: Users, label: 'Clientes' },
    { path: '/admin/hours', icon: Clock, label: 'Horários' },
    { path: '/admin/settings', icon: Settings, label: 'Configurações' },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E11] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#0E0E11]/50 backdrop-blur-xl flex flex-col hidden md:flex relative z-10">
        <div className="p-6 flex items-center gap-3 border-b border-white/5">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <img src={settings.logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-bold text-white">{settings.name}</h2>
            <p className="text-xs text-orange-500">Painel Admin</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative group ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="admin-nav-active"
                    className="absolute inset-0 bg-orange-500/10 border border-orange-500/20 rounded-xl"
                  />
                )}
                <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-orange-400' : ''}`} />
                <span className="relative z-10 font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all w-full">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative z-10 h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
