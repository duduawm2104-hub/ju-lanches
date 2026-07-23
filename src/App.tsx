/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Home } from './pages/customer/Home';
import { ProductDetail } from './pages/customer/ProductDetail';
import { AdminLayout } from './pages/admin/AdminLayout';
import { Dashboard } from './pages/admin/Dashboard';
import { AdminProducts } from './pages/admin/AdminProducts';
import { ParticlesBackground } from './components/ParticlesBackground';
import { BottomNav } from './components/BottomNav';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#0E0E11] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden pb-20">
          <ParticlesBackground />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/offers" element={<div className="p-8 text-center text-gray-400 mt-20">Ofertas em breve!</div>} />
            <Route path="/orders" element={<div className="p-8 text-center text-gray-400 mt-20">Meus Pedidos</div>} />
            <Route path="/favorites" element={<div className="p-8 text-center text-gray-400 mt-20">Meus Favoritos</div>} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<AdminProducts />} />
            </Route>
          </Routes>
          <BottomNav />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
