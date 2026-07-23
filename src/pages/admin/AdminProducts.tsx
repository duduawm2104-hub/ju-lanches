import { useState } from 'react';
import { Plus, Search, Edit2, Trash2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export function AdminProducts() {
  const { products, categories, deleteProduct } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Produtos</h1>
          <p className="text-gray-400">Gerencie o cardápio da sua loja.</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(255,140,0,0.3)] transition-all">
          <Plus className="w-5 h-5" />
          Novo Produto
        </button>
      </div>

      <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Buscar produtos..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0E0E11] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm">
                <th className="pb-4 font-medium">Produto</th>
                <th className="pb-4 font-medium">Categoria</th>
                <th className="pb-4 font-medium">Preço Base</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => {
                const category = categories.find(c => c.id === product.categoryId);
                return (
                  <tr key={product.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/5">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{product.name}</p>
                          <p className="text-xs text-gray-500 max-w-[200px] truncate">{product.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
                        {category?.name || 'Sem categoria'}
                      </span>
                    </td>
                    <td className="py-4 font-medium text-white">
                      R$ {product.price.toFixed(2)}
                    </td>
                    <td className="py-4">
                      <span className="flex items-center gap-2 text-xs font-medium text-green-400">
                        <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        Disponível
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteProduct(product.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
