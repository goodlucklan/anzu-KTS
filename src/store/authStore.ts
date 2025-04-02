// src/store/authStore.ts
import { create } from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
  konamiid: string;
}

interface AuthState {
  formData: {
    email: string;
    password: string;
  };
  showPassword: boolean;
  isLoading: boolean;
  user: User | null; // Nuevo campo para el usuario autenticado
  setFormData: (data: Partial<AuthState["formData"]>) => void;
  setShowPassword: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  setUser: (user: User | null) => void; // Nueva función para actualizar el usuario
}

export const useAuthStore = create<AuthState>((set) => ({
  formData: {
    email: "",
    password: "",
  },
  showPassword: false,
  isLoading: false,
  user: null, // Inicialmente null (sin usuario autenticado)
  setFormData: (data) =>
    set((state) => ({
      ...state,
      formData: { ...state.formData, ...data },
    })),
  setShowPassword: (value) => set({ showPassword: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setUser: (user) => set({ user }), // Actualiza el campo user
}));
