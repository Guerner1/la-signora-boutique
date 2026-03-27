"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus,
  CheckCircle,
  X,
  Loader2
} from "lucide-react";

// Types
type MenuItem = {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
};

type CartItem = MenuItem & {
  quantity: number;
};

// Data
const menuItems: MenuItem[] = [
  // Pizze
  { id: 1, name: "Margherita D.O.P.", desc: "Molho de tomate San Marzano, Mozzarella di Bufala Campana, manjericão fresco, azeite extra virgem.", price: 16, category: "Pizze" },
  { id: 2, name: "La Signora Tartufo", desc: "Creme de trufa preta, fior di latte, cogumelos porcini frescos, lascas de parmesão, azeite de trufa.", price: 24, category: "Pizze" },
  { id: 3, name: "Burrata & Prosciutto", desc: "Fior di latte, rúcula selvagem, presunto de Parma curado 24 meses, burrata inteira no topo, tomate cereja confitado.", price: 22, category: "Pizze" },
  { id: 4, name: "Diavola Piccante", desc: "Molho de tomate, fior di latte, salame piccante napolitano, nduja da Calábria, malagueta fresca.", price: 18, category: "Pizze" },
  { id: 5, name: "Pistacchio Mortadella", desc: "Pesto de pistáchio, fior di latte, mortadela de Bolonha IGP, stracciatella, granada de pistáchio.", price: 21, category: "Pizze" },

  // Paste
  { id: 6, name: "Spaghetti alla Carbonara", desc: "Guanciale estaladiço, gemas de ovos biológicos, Pecorino Romano, pimenta preta moída no momento.", price: 19, category: "Paste" },
  { id: 7, name: "Tagliatelle al Ragù", desc: "Massa fresca artesanal, ragù tradicional à bolonhesa cozinhado lentamente durante 8 horas, Parmigiano Reggiano.", price: 20, category: "Paste" },
  { id: 8, name: "Ravioli Ricotta & Tartufo", desc: "Massa fresca recheada com ricotta e espinafres, servida num creme aveludado de trufa preta e sálvia.", price: 26, category: "Paste" },
  { id: 9, name: "Linguine ai Frutti di Mare", desc: "Linguine com mexilhões, amêijoas, camarão tigre, lulas, alho, vinho branco e tomate fresco.", price: 28, category: "Paste" },

  // Dolci
  { id: 15, name: "Tiramisù Tradizionale", desc: "A verdadeira receita italiana com palitos la reine, café espresso puro, creme de mascarpone e cacau em pó.", price: 9, category: "Dolci" },
  { id: 16, name: "Panna Cotta al Limoncello", desc: "Panna cotta cremosa com uma redução de licor limoncello artesanal e crumble de amêndoa.", price: 8, category: "Dolci" },
  { id: 17, name: "Cannolo Siciliano", desc: "Massa crocante recheada com creme de ricotta de ovelha doce, pedaços de chocolate negro e pistáchio.", price: 10, category: "Dolci" },
];

const categories = ["Visualizar Tudo", "Pizze", "Paste", "Dolci"];

export default function TakeAwayPage() {
  const [activeCategory, setActiveCategory] = useState("Visualizar Tudo");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpenMobile, setIsCartOpenMobile] = useState(false);
  const [isCheckoutMode, setIsCheckoutMode] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    morada: "",
    observacoes: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<{ id: string, time: string } | null>(null);

  // Cart Calculations
  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);
  const iva = useMemo(() => subtotal * 0.23, [subtotal]);
  const total = useMemo(() => subtotal + iva, [subtotal, iva]);
  const cartItemCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  // Cart Actions
  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  // Form Actions
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!formData.telefone.trim()) newErrors.telefone = "Telefone é obrigatório";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido";
    if (!formData.morada.trim()) newErrors.morada = "Morada é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "https://SEU-N8N.app/webhook/pedido-takeaway";
    
    const payload = {
      nome: formData.nome,
      telefone: formData.telefone,
      email: formData.email,
      morada: formData.morada,
      observacoes: formData.observacoes,
      itens: cart.map(item => ({
        nome: item.name,
        quantidade: item.quantity,
        preco_unitario: item.price
      }))
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        // Mocked response for success showcase, since true webhook may not return this exact JSON if not configured
        // We will just use fallback fake data if it doesn't return JSON
        let data = { pedido_id: `LS-${Math.floor(Math.random() * 10000)}`, tempo_estimado: "45-60 min" };
        try {
            data = await response.json();
        } catch(e) {}
        
        setOrderSuccess({ id: data.pedido_id || `LS-${Math.floor(Math.random() * 10000)}`, time: data.tempo_estimado || "45-60 min" });
        clearCart();
        setIsCheckoutMode(false);
        setIsCartOpenMobile(false);
      } else {
        alert("Ocorreu um erro ao processar o seu pedido. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro de ligação. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "Visualizar Tudo" || item.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[var(--color-boutique-bg)] text-[var(--color-boutique-ink)] font-sans pb-24 lg:pb-0">
      <Navbar />

      {/* Hero Header */}
      <div className="relative h-[40vh] min-h-[300px] w-full mt-20 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"
          alt="Take Away La Signora"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-boutique-bg)]/20 to-[var(--color-boutique-bg)]" />
        
        <div className="relative z-10 text-center px-4 max-w-3xl mt-12">
          <Link href="/" className="inline-flex items-center text-sm uppercase tracking-widest text-[var(--color-boutique-accent)] hover:text-[var(--color-boutique-ink)] transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-playfair mb-4"
          >
            Take <span className="text-[var(--color-boutique-accent)] italic">Away</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg font-light opacity-80"
          >
            A autenticidade italiana entregue na sua porta. Escolha, encomende e desfrute.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content (Left / 2 Cols) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-3 sticky top-28 z-30 bg-[var(--color-boutique-bg)]/90 backdrop-blur-md py-4 border-b border-[var(--color-boutique-ink)]/5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat 
                      ? "bg-[var(--color-boutique-accent)] text-white"
                      : "bg-transparent text-[var(--color-boutique-ink)] hover:bg-[var(--color-boutique-surface)] border border-[var(--color-boutique-ink)]/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => {
                  const cartItem = cart.find(i => i.id === item.id);
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[var(--color-boutique-surface)] p-6 rounded-sm flex flex-col h-full border border-[var(--color-boutique-ink)]/5 transition-colors hover:border-[var(--color-boutique-accent)]/30"
                    >
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <h3 className="text-xl font-playfair">{item.name}</h3>
                        <span className="text-lg text-[var(--color-boutique-accent)] whitespace-nowrap">{item.price}€</span>
                      </div>
                      <p className="text-sm font-light opacity-70 mb-6 flex-grow">
                        {item.desc}
                      </p>
                      
                      <div className="mt-auto">
                        {!cartItem ? (
                          <button
                            onClick={() => addToCart(item)}
                            className="w-full py-2.5 border border-[var(--color-boutique-ink)] text-[var(--color-boutique-ink)] hover:bg-[var(--color-boutique-ink)] hover:text-white transition-colors duration-300 rounded-sm text-xs uppercase tracking-widest font-medium"
                          >
                            Adicionar
                          </button>
                        ) : (
                          <div className="flex items-center justify-between border border-[var(--color-boutique-ink)] rounded-sm p-1 bg-white">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-[var(--color-boutique-bg)] transition-colors rounded-sm"
                              aria-label="Diminuir quantidade"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-medium text-sm w-8 text-center">{cartItem.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-[var(--color-boutique-bg)] transition-colors rounded-sm"
                              aria-label="Aumentar quantidade"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Cart Sidebar (Desktop) / Drawer (Mobile) */}
          <div className={`
            fixed inset-0 z-50 bg-black/40 transition-opacity lg:static lg:bg-transparent lg:z-auto
            ${isCartOpenMobile ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"}
          `}>
            <div className={`
              absolute bottom-0 right-0 left-0 lg:static lg:h-auto
              bg-[var(--color-boutique-bg)] lg:bg-transparent 
              p-6 lg:p-0
              rounded-t-2xl lg:rounded-none
              transition-transform duration-300 lg:transform-none
              shadow-2xl lg:shadow-none
              ${isCartOpenMobile ? "translate-y-0" : "translate-y-full"}
            `}>
              <div className="flex items-center justify-between mb-8 border-b border-[var(--color-boutique-ink)]/10 pb-4">
                <h2 className="text-2xl font-playfair flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[var(--color-boutique-accent)]" /> 
                  O Seu Pedido
                </h2>
                <button 
                  onClick={() => setIsCartOpenMobile(false)}
                  className="lg:hidden p-2 hover:bg-[var(--color-boutique-surface)] rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12 opacity-50">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p className="font-light">O seu carrinho está vazio</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {!isCheckoutMode ? (
                    <>
                      <div className="max-h-[65vh] lg:max-h-[75vh] overflow-y-auto pr-2 space-y-4">
                        {cart.map(item => (
                          <div key={item.id} className="flex justify-between items-start gap-4 text-sm">
                            <div className="flex-grow">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-[var(--color-boutique-ink)]/60 text-xs mt-1">{item.price}€ x {item.quantity}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className="font-medium whitespace-nowrap">{(item.price * item.quantity).toFixed(2)}€</span>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500/70 hover:text-red-500 transition-colors"
                                aria-label="Remover item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-[var(--color-boutique-ink)]/10 pt-4 space-y-2 text-sm">
                        <div className="flex justify-between opacity-70">
                          <span>Subtotal</span>
                          <span>{subtotal.toFixed(2)}€</span>
                        </div>
                        <div className="flex justify-between opacity-70">
                          <span>IVA (23%)</span>
                          <span>{iva.toFixed(2)}€</span>
                        </div>
                        <div className="flex justify-between font-medium text-lg pt-2 border-t border-[var(--color-boutique-ink)]/10 mt-2">
                          <span>Total</span>
                          <span className="text-[var(--color-boutique-accent)]">{total.toFixed(2)}€</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setIsCheckoutMode(true)}
                        className="w-full py-4 bg-[var(--color-boutique-accent)] text-white hover:bg-[var(--color-boutique-ink)] transition-colors duration-300 rounded-sm text-sm uppercase tracking-widest font-medium shadow-lg"
                      >
                        Finalizar Pedido
                      </button>
                    </>
                  ) : (
                     // Formulario Checkout
                    <form onSubmit={handleSubmit} className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                      <div className="flex items-center gap-2 mb-4">
                        <button type="button" onClick={() => setIsCheckoutMode(false)} className="text-[var(--color-boutique-accent)] hover:underline text-sm flex items-center">
                           <ArrowLeft className="w-4 h-4 mr-1"/> Voltar ao carrinho
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-widest mb-1 opacity-70">Nome *</label>
                        <input 
                          type="text" 
                          value={formData.nome}
                          onChange={(e) => setFormData({...formData, nome: e.target.value})}
                          className={`w-full p-2.5 bg-transparent border ${errors.nome ? 'border-red-500' : 'border-[var(--color-boutique-ink)]/20'} rounded-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-sm`}
                        />
                        {errors.nome && <span className="text-red-500 text-xs mt-1 block">{errors.nome}</span>}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-widest mb-1 opacity-70">Telefone *</label>
                        <input 
                          type="tel" 
                          placeholder="+351 9XX XXX XXX"
                          value={formData.telefone}
                          onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                          className={`w-full p-2.5 bg-transparent border ${errors.telefone ? 'border-red-500' : 'border-[var(--color-boutique-ink)]/20'} rounded-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-sm`}
                        />
                        {errors.telefone && <span className="text-red-500 text-xs mt-1 block">{errors.telefone}</span>}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-widest mb-1 opacity-70">Email *</label>
                        <input 
                          type="email" 
                          placeholder="Para receber fatura"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className={`w-full p-2.5 bg-transparent border ${errors.email ? 'border-red-500' : 'border-[var(--color-boutique-ink)]/20'} rounded-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-sm`}
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-widest mb-1 opacity-70">Morada de Entrega *</label>
                        <textarea 
                          rows={2}
                          value={formData.morada}
                          onChange={(e) => setFormData({...formData, morada: e.target.value})}
                          className={`w-full p-2.5 bg-transparent border ${errors.morada ? 'border-red-500' : 'border-[var(--color-boutique-ink)]/20'} rounded-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-sm resize-none`}
                        />
                        {errors.morada && <span className="text-red-500 text-xs mt-1 block">{errors.morada}</span>}
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-widest mb-1 opacity-70">Observações</label>
                        <textarea 
                          rows={2}
                          placeholder="Alergias, preferências, instruções..."
                          value={formData.observacoes}
                          onChange={(e) => setFormData({...formData, observacoes: e.target.value})}
                          className="w-full p-2.5 bg-transparent border border-[var(--color-boutique-ink)]/20 rounded-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-sm resize-none"
                        />
                      </div>

                      <div className="pt-2 border-t border-[var(--color-boutique-ink)]/10 text-sm flex justify-between font-medium">
                        <span>Total a Pagar</span>
                        <span className="text-[var(--color-boutique-accent)]">{total.toFixed(2)}€</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 mt-4 bg-[var(--color-boutique-accent)] text-white hover:bg-[var(--color-boutique-ink)] transition-colors duration-300 rounded-sm text-sm uppercase tracking-widest font-medium shadow-lg flex items-center justify-center disabled:opacity-70"
                      >
                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Confirmar Encomenda"}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Mobile only) */}
      {!isCartOpenMobile && cartItemCount > 0 && (
        <button
          onClick={() => setIsCartOpenMobile(true)}
          className="fixed bottom-6 right-6 z-40 lg:hidden bg-[var(--color-boutique-accent)] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105"
        >
          <div className="relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-[var(--color-boutique-ink)] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartItemCount}
            </span>
          </div>
        </button>
      )}

      {/* Success Modal */}
      <AnimatePresence>
        {orderSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[var(--color-boutique-bg)] w-full max-w-md p-8 rounded-sm shadow-2xl text-center border border-[var(--color-boutique-accent)]/20"
            >
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-playfair mb-2">Pedido Confirmado!</h2>
              <p className="font-light opacity-80 mb-8">
                A sua encomenda foi recebida e está a ser preparada.
              </p>
              
              <div className="bg-[var(--color-boutique-surface)] p-4 rounded-sm mb-8 space-y-3 text-sm text-left font-medium">
                <div className="flex justify-between border-b border-[var(--color-boutique-ink)]/5 pb-2">
                  <span className="opacity-70 uppercase tracking-widest text-xs">ID Pedido</span>
                  <span>{orderSuccess.id}</span>
                </div>
                <div className="flex justify-between border-b border-[var(--color-boutique-ink)]/5 pb-2">
                  <span className="opacity-70 uppercase tracking-widest text-xs">Tempo Estimado</span>
                  <span className="text-[var(--color-boutique-accent)]">{orderSuccess.time}</span>
                </div>
              </div>

              <button
                onClick={() => setOrderSuccess(null)}
                className="w-full py-4 border border-[var(--color-boutique-ink)] text-[var(--color-boutique-ink)] hover:bg-[var(--color-boutique-ink)] hover:text-white transition-colors duration-300 rounded-sm text-sm uppercase tracking-widest font-medium"
              >
                Novo Pedido
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
