import { create } from 'zustand'

interface ProductStore {
  terms: number;
  goalAmount: number;
  monthlyAmount: number;
  setTerms: (newTerms: number) => void;
  setGoalAmount: (newGoal: number) => void;
  setMonthlyAmount: (newMonthly: number) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  terms: 12,
  goalAmount: 0,
  monthlyAmount: 0,
  setTerms: (newTerms: number) => set({ terms: newTerms }),
  setGoalAmount: (newGoal: number) => set({ goalAmount: newGoal }),
  setMonthlyAmount: (newMonthly: number) => set({ monthlyAmount: newMonthly }),
}))

export default useProductStore