import { create } from "zustand";

// Estado global
export const useTournamentStore = create((set) => ({
  submittedForms: [],
  addForm: (form: any) =>
    set((state: any) => ({
      submittedForms: [...state.submittedForms, form],
    })),
  resetForms: () => set({ submittedForms: [] }),
}));
