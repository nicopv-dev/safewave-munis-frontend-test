import Session from "@/types/session";
import { create } from "zustand";

interface State {
  user: Session | null;
  isAuth: boolean;
  isLoading: boolean;
}

interface Action {
  setUser: (user: Session) => void;
  removeUser: () => void;
  setIsAuth: (isAuth: boolean) => void;
  setIsLoading: (isLoaded: boolean) => void;
}

const sessionStore = create<State & Action>((set) => ({
  user: null,
  isAuth: false,
  isLoading: true,

  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
  setIsAuth: (isAuth) => set({ isAuth }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export const useSession = sessionStore;
