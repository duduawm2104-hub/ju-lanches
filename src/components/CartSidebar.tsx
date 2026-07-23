import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, updateCartItemQuantity, removeFromCart, settings } = useAppContext();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const total = subtotal > 0 ? subtotal + settings.deliveryFee : 0;

  const handleCheckout = () => {
    if (cart.length === 0) return;

    let message = `*NOVO PEDIDO - ${settings.name}*\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.quantity}x *${item.name}* (R$ ${item.totalPrice.toFixed(2)})\n`;
      if (item.size) message += `   Tamanho: ${item.size.name}\n`;
      if (item.extras.length > 0) {
        message += `   Adicionais: ${item.extras.map(e => e.name).join(', ')}\n`;
      }
      if (item.notes) message += `   Obs: ${item.notes}\n`;
      message += '\n';
    });

    message += `*Subtotal:* R$ ${subtotal.toFixed(2)}\n`;
    message += `*Taxa de entrega:* R$ ${settings.deliveryFee.toFixed(2)}\n`;
    message += `*Total:* R$ ${total.toFixed(2)}\n`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${settings.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-[#0E0E11]/95 backdrop-blur-xl border-l border-white/10 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-xl font-bold text-white">Seu Pedido</h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-50">
                  <div className="w-24 h-24 mb-4 rounded-full bg-white/5 flex items-center justify-center">
                    <ShoppingBagIcon className="w-10 h-10 text-gray-400" />
                  </div>
                  <p className="text-gray-400">Seu carrinho está vazio.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 relative group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-xs text-gray-400 mt-1 space-y-0.5">
                        {item.size && <p>Tamanho: {item.size.name}</p>}
                        {item.extras.length > 0 && <p>Adicionais: {item.extras.map(e => e.name).join(', ')}</p>}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span className="font-bold text-orange-400 text-sm">
                          R$ {item.totalPrice.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-3 bg-[#0E0E11] rounded-full px-2 py-1 border border-white/10">
                          <button 
                            onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                            className="text-gray-400 hover:text-white"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                            className="text-gray-400 hover:text-white"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-[#0E0E11]/80 backdrop-blur-md">
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Taxa de entrega</span>
                    <span>R$ {settings.deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-white pt-3 border-t border-white/10">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-orange-500 text-white font-semibold shadow-[0_0_20px_rgba(255,140,0,0.3)] hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(255,140,0,0.5)] transition-all"
                >
                  <span>Finalizar Pedido via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Icon helper
function ShoppingBagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
