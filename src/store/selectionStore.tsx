import { create } from 'zustand'

interface SelectionStore {
  selectedProduct: string;
  setSelectedProduct: (newId: string) => void;
}

const useSelectionStore = create<SelectionStore>((set) => ({
  selectedProduct: '',
  setSelectedProduct: (newId: string) => set({ selectedProduct: newId }),
}))

export default useSelectionStore