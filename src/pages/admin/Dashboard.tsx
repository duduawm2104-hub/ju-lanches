import { motion } from 'framer-motion';
import { TrendingUp, ShoppingBag, Users, DollarSign } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export function Dashboard() {
  const { orders, products } = useAppContext();

  const stats = [
    { title: 'Pedidos Hoje', value: orders.filter(o => o.createdAt.startsWith(new Date().toISOString().split('T')[0])).length, icon: ShoppingBag, trend: '+12%', color: 'text-blue-400' },
    { title: 'Faturamento', value: `R$ ${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}`, icon: DollarSign, trend: '+5.2%', color: 'text-green-400' },
    { title: 'Produtos Ativos', value: products.length, icon: TrendingUp, trend: '0%', color: 'text-orange-400' },
    { title: 'Novos Clientes', value: '24', icon: Users, trend: '+18%', color: 'text-purple-400' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Visão Geral</h1>
        <p className="text-gray-400">Acompanhe o desempenho do seu negócio hoje.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/5 rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 opacity-20 rounded-full blur-[40px] transition-all group-hover:scale-150 ${stat.color.replace('text', 'bg')}`} />
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-lg">
                {stat.trend}
              </span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-gray-400 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6 h-[400px]">
          <h3 className="text-lg font-semibold text-white mb-6">Faturamento Mensal</h3>
          <div className="w-full h-[300px] flex items-end gap-2 justify-between px-4 pb-8 border-b border-white/10">
            {/* Fake chart */}
            {[40, 70, 45, 90, 65, 85, 110].map((h, i) => (
              <div key={i} className="w-full relative group flex flex-col items-center">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="w-full max-w-[40px] bg-orange-500/20 rounded-t-lg border-t border-orange-500/50 group-hover:bg-orange-500/40 transition-colors relative"
                >
                  <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs text-white whitespace-nowrap left-1/2 -translate-x-1/2">
                    R$ {(h * 10).toFixed(2)}
                  </div>
                </motion.div>
                <span className="text-xs text-gray-500 mt-4 absolute -bottom-6">Dia {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Pedidos Recentes</h3>
          <div className="space-y-4">
            {orders.length === 0 ? (
              <p className="text-gray-500 text-sm">Nenhum pedido ainda.</p>
            ) : (
              orders.slice(0, 5).map(order => (
                <div key={order.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div>
                    <p className="font-medium text-white text-sm">{order.customerName}</p>
                    <p className="text-xs text-gray-400">{new Date(order.createdAt).toLocaleTimeString()}</p>
                  </div>
                  <span className="font-bold text-orange-400 text-sm">R$ {order.total.toFixed(2)}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
