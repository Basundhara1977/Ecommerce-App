import { create } from 'zustand';

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

interface State {
  search: string;
  category: string;
  cart: number[];
  mockProducts: Product[];
  setSearch: (s: string) => void;
  setCategory: (c: string) => void;
  addToCart: (id: number) => void;
  addMockProduct: (product: Product) => void;
}

export const useStore = create<State>((set) => ({
  search: '',
  category: '',
  cart: [],
  mockProducts: [],
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  addToCart: (id) => set((state) => ({ cart: [...state.cart, id] })),
  addMockProduct: (product) =>
    set((state) => ({
      mockProducts: [
        { ...product, id: Date.now() }, // Use timestamp as fake ID
        ...state.mockProducts,
      ],
    })),
}));
