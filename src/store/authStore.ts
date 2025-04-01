// src/store/authStore.ts
import { create } from "zustand";

interface AuthState {
  formData: {
    email: string;
    password: string;
  };
  showPassword: boolean;
  isLoading: boolean;
  setFormData: (data: Partial<AuthState["formData"]>) => void;
  setShowPassword: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  formData: {
    email: "",
    password: "",
  },
  showPassword: false,
  isLoading: false,
  setFormData: (data) =>
    set((state) => ({
      ...state,
      formData: { ...state.formData, ...data },
    })),
  setShowPassword: (value) => set({ showPassword: value }),
  setIsLoading: (value) => set({ isLoading: value }),
}));
