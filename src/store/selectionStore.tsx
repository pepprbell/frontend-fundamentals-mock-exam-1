import { create } from 'zustand'
import { SavingsProduct } from '../domains/savingsProduct/SavingsProduct'

interface SelectionStore {
  selectedProduct: SavingsProduct | null
  setSelectedProduct: (newProduct: SavingsProduct) => void
}

const useSelectionStore = create<SelectionStore>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (newProduct: SavingsProduct) => set({ selectedProduct: newProduct }),
}))

export default useSelectionStore