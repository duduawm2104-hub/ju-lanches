import { Category, Product, StoreSettings } from '../types';
import logoImg from '../assets/images/ju_lanches_logo_1784836222236.jpg';

export const initialSettings: StoreSettings = {
  name: 'JU Lanches',
  isOpen: true,
  deliveryTime: '45-60 min',
  deliveryFee: 5.00,
  whatsapp: '5564984270028',
  logo: logoImg,
};

export const initialCategories: Category[] = [
  { id: 'c1', name: 'Sanduíches', icon: '🍔', order: 1 },
  { id: 'c2', name: 'Porções', icon: '🍟', order: 2 },
  { id: 'c3', name: 'Sucos e Cremes', icon: '🍹', order: 3 },
  { id: 'c4', name: 'Refrigerantes', icon: '🥤', order: 4 },
];

const extrasMenu = [
  { id: 'e1', name: 'Catupiry', price: 3 },
  { id: 'e2', name: 'Hamburguer', price: 5 },
  { id: 'e3', name: 'Frango', price: 5 },
  { id: 'e4', name: 'Ovo', price: 3 },
  { id: 'e5', name: 'Salsicha', price: 3 },
  { id: 'e6', name: 'Calabresa', price: 5 },
  { id: 'e7', name: 'Filé', price: 5 },
  { id: 'e8', name: 'Lombo', price: 5 },
  { id: 'e9', name: 'Abacaxi', price: 2 },
  { id: 'e10', name: 'Presunto', price: 3 },
  { id: 'e11', name: 'Muçarela', price: 3 },
  { id: 'e12', name: 'Cheddar', price: 3 },
];

export const initialProducts: Product[] = [
  // --- SANDUÍCHES ---
  {
    id: 's1', categoryId: 'c1', name: 'Misto', description: 'Pão, presunto; muçarela e tomate.', price: 14, popular: false,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's2', categoryId: 'c1', name: 'X Salada Simples', description: 'Pão; hambúrguer; presunto; muçarela; tomate; alface; milho e batata palha.', price: 22, popular: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's3', categoryId: 'c1', name: 'X Salada Especial', description: 'Pão; hambúrguer; ovo; presunto; muçarela; tomate; alface; milho e batata palha.', price: 24, popular: false,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's4', categoryId: 'c1', name: 'X Bacon Simples', description: 'Pão; hambúrguer; bacon; presunto; muçarela; tomate; alface; milho e batata palha.', price: 27, popular: true,
    image: 'https://images.unsplash.com/photo-1594212848116-63d12d4a1387?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's5', categoryId: 'c1', name: 'X Bacon Especial', description: 'Pão; hambúrguer; ovo; bacon; presunto; muçarela; tomate; alface; milho e batata palha', price: 29, popular: false,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's6', categoryId: 'c1', name: 'X Americano', description: 'Pão; hambúrguer; salsicha; presunto; muçarela; tomate; alface; milho e batata palha', price: 24, popular: false,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's7', categoryId: 'c1', name: 'X Rango', description: 'Pão; hambúrguer; ovo; salsicha; presunto; muçarela; tomate; alface; milho e batata palha.', price: 26, popular: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's8', categoryId: 'c1', name: 'X Rango Especial', description: 'Pão; hambúrguer; bacon; salsicha; presunto; muçarela; tomate; alface; milho e batata palha', price: 29, popular: false,
    image: 'https://images.unsplash.com/photo-1594212848116-63d12d4a1387?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's9', categoryId: 'c1', name: 'X Tudo', description: 'Pão; hambúrguer; bacon; ovo; salsicha; presunto; muçarela; tomate; alface; milho e batata palha.', price: 32, popular: true,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's10', categoryId: 'c1', name: 'X Tudo Especial', description: 'Pão; hambúrguer; frango; bacon; ovo; salsicha; presunto; muçarela; tomate; alface; milho e batata palha', price: 36, popular: true, rating: 5.0, reviews: 312,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's11', categoryId: 'c1', name: 'X Frango Simples', description: 'Pão; frango; salsicha; presunto; muçarela; tomate; alface; milho e batata palha', price: 24, popular: false,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's12', categoryId: 'c1', name: 'X Frango Especial', description: 'Pão; frango; ovo; salsicha; presunto; muçarela; tomate; alface; milho e batata palha.', price: 26, popular: false,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's13', categoryId: 'c1', name: 'Papas Frango Simples', description: 'Pão; frango; bacon; presunto; muçarela; tomate; alface; milho e batata palha.', price: 27, popular: false,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's14', categoryId: 'c1', name: 'Papas Frango Especial', description: 'Pão; frango; bacon; ovo; salsicha; presunto; mussarela; tomate; alface; milho e batata palha', price: 32, popular: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's15', categoryId: 'c1', name: 'Papas Rango', description: 'Pão; hambúrguer; frango; ovo; salsicha; presunto; muçarela; tomate; alface; milho e batata palha', price: 32, popular: false,
    image: 'https://images.unsplash.com/photo-1594212848116-63d12d4a1387?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's16', categoryId: 'c1', name: 'Hot Dog Simples', description: 'Pão; Salsicha; presunto; muçarela; alface; tomate; milho e batata palha', price: 18, popular: false,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's17', categoryId: 'c1', name: 'Hot Dog Especial', description: 'Pão; salsicha; ovo; presunto; muçarela; alface; tomate; milho e batata palha', price: 20, popular: true, rating: 4.8, reviews: 140,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's18', categoryId: 'c1', name: 'Hot Bacon Simples', description: 'Pão; salsicha; bacon; presunto; muçarela; alface; tomate; milho e batata palha', price: 21, popular: false,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's19', categoryId: 'c1', name: 'Hot Bacon Especial', description: 'Pão; salsicha; bacon; ovo; presunto; muçarela; alface; tomate; milho e batata palha', price: 25, popular: false,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's20', categoryId: 'c1', name: 'X Lombo', description: 'Pão; lombo; presunto; muçarela; tomate e alface', price: 22, popular: false,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's21', categoryId: 'c1', name: 'X Lombo Especial', description: 'Pão; lombo; ovo; presunto; muçarela; tomate e alface', price: 24, popular: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's22', categoryId: 'c1', name: 'X Lombo Bacon', description: 'Pão; lombo; bacon; presunto; muçarela; tomate e alface', price: 27, popular: false,
    image: 'https://images.unsplash.com/photo-1594212848116-63d12d4a1387?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's23', categoryId: 'c1', name: 'X Lombo Bacon Especial', description: 'Pão; lombo; bacon; ovo; presunto; muçarela; tomate e alface', price: 29, popular: false,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's24', categoryId: 'c1', name: 'X Calabresa', description: 'Pão; calabresa; presunto; muçarela; tomate e alface', price: 22, popular: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's25', categoryId: 'c1', name: 'X Calabresa Especial', description: 'Pão; calabresa; ovo; presunto; muçarela; tomate e alface', price: 24, popular: false,
    image: 'https://images.unsplash.com/photo-1594212848116-63d12d4a1387?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's26', categoryId: 'c1', name: 'X Tudo Calabresa', description: 'Pão; calabresa; bacon; presunto; muçarela; tomate e alface', price: 27, popular: false,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's27', categoryId: 'c1', name: 'X Tudo Calabresa Especial', description: 'Pão; calabresa; bacon; ovo; presunto; muçarela; tomate e alface', price: 29, popular: false,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's28', categoryId: 'c1', name: 'X Filé', description: 'Pão; file; presunto; muçarela; tomate; alface e milho', price: 22, popular: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's29', categoryId: 'c1', name: 'X Filé Especial', description: 'Pão; file; ovo; presunto; muçarela; tomate; alface e milho', price: 24, popular: false,
    image: 'https://images.unsplash.com/photo-1594212848116-63d12d4a1387?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },
  {
    id: 's30', categoryId: 'c1', name: 'X Filé Bacon', description: 'Pão; file; bacon; ovo; presunto; muçarela; tomate alface e milho', price: 29, popular: false,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=800', extras: extrasMenu,
  },

  // --- PORÇÕES ---
  {
    id: 'p1', categoryId: 'c2', name: 'Batata Simples', description: 'Porção de batata frita simples', price: 20, popular: true, rating: 4.5, reviews: 89,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p2', categoryId: 'c2', name: 'Batata Especial', description: 'Batata, Bacon e Muçarela', price: 24, popular: true, rating: 4.9, reviews: 205,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p3', categoryId: 'c2', name: 'Calabresa C/ Cebola', description: 'Porção de calabresa acebolada', price: 20, popular: false,
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p4', categoryId: 'c2', name: 'Picadinho de Contra Filé Acebolado C/ Mussarela', description: 'Picadinho de contra filé acebolado com mussarela derretida', price: 25, popular: true, rating: 4.8, reviews: 156,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800',
  },

  // --- SUCOS ---
  ...['Laranja', 'Abacaxi', 'Abacaxi com hortela', 'Acerola', 'Acerola com Laranja', 'Caju', 'Goiaba', 'Maracuja', 'Morango', 'Manga', 'Limao', 'Mamao', 'Tamarindo', 'Uva'].map((sabor, index) => ({
    id: `suco${index}`, categoryId: 'c3', name: `Suco de ${sabor}`, description: 'Natural, feito na hora.', price: 10,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab8063b678c?auto=format&fit=crop&q=80&w=800',
    sizes: [
      { id: 's1', name: '500 ml', price: 10 },
      { id: 's2', name: '750 ml', price: 15 },
      { id: 's3', name: '1 litro', price: 20 },
    ]
  })),

  // --- CREMES ---
  ...['Abacaxi', 'Abacaxi com hortela', 'Acerola', 'Acerola com Laranja', 'Açaí', 'Goiaba', 'Maracuja', 'Morango', 'Manga', 'Mamao', 'Tamarindo', 'Uva', 'Limão'].map((sabor, index) => ({
    id: `creme${index}`, categoryId: 'c3', name: `Creme de ${sabor}`, description: 'Delicioso creme refrescante.', price: 15,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800',
    sizes: [
      { id: 's1', name: '500 ml', price: 15 },
    ]
  })),

  // --- REFRIGERANTES (Latas) ---
  ...[
    { name: 'Coca-Cola', price: 6 },
    { name: 'Coca-Cola Zero', price: 6 },
    { name: 'Fanta', price: 5 },
    { name: 'Sprite', price: 5 },
    { name: 'Mineiro', price: 5 },
    { name: 'Pepsi', price: 5 },
    { name: 'Pepsi Black', price: 5 },
    { name: 'Antarctica', price: 5 }
  ].map((refri, index) => ({
    id: `refri_lata${index}`, categoryId: 'c4', name: `${refri.name} (Lata)`, description: 'Lata 350ml', price: refri.price,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
  })),

  // --- REFRIGERANTES (1.5L) ---
  ...[
    { name: 'Coca-Cola', price: 12 },
    { name: 'Coca-Cola Zero', price: 12 },
    { name: 'Fanta', price: 10 },
    { name: 'Sprite', price: 10 },
    { name: 'Mineiro', price: 10 },
    { name: 'Pepsi', price: 10 },
    { name: 'Pepsi Black', price: 10 },
    { name: 'Antarctica', price: 10 },
    { name: 'Limoneto', price: 10 }
  ].map((refri, index) => ({
    id: `refri_15l${index}`, categoryId: 'c4', name: `${refri.name} (1.5L)`, description: 'Garrafa 1.5 Litros', price: refri.price,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
  })),

  // --- REFRIGERANTES (600ml) ---
  ...[
    { name: 'Coca-Cola', price: 8 },
    { name: 'Mineiro', price: 6 },
    { name: 'Antarctica', price: 7 },
    { name: 'Limoneto', price: 7 }
  ].map((refri, index) => ({
    id: `refri_600ml${index}`, categoryId: 'c4', name: `${refri.name} (600ml)`, description: 'Garrafa 600ml', price: refri.price,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
  })),

  // --- REFRIGERANTES (1L) ---
  ...[
    { name: 'Coca-Cola', price: 10 },
    { name: 'Antarctica', price: 8 }
  ].map((refri, index) => ({
    id: `refri_1l${index}`, categoryId: 'c4', name: `${refri.name} (1L)`, description: 'Garrafa 1 Litro', price: refri.price,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
  })),

  // --- REFRIGERANTES (2L) ---
  ...[
    { name: 'Coca-Cola', price: 14 },
    { name: 'Coca-Cola Zero', price: 14 },
    { name: 'Mineiro', price: 12 },
    { name: 'Amazonas', price: 7 },
    { name: 'Pepsi', price: 12 },
    { name: 'Pepsi Black', price: 12 },
    { name: 'Antarctica', price: 12 },
    { name: 'Antarctica Zero', price: 12 }
  ].map((refri, index) => ({
    id: `refri_2l${index}`, categoryId: 'c4', name: `${refri.name} (2L)`, description: 'Garrafa 2 Litros', price: refri.price,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
  }))
];

