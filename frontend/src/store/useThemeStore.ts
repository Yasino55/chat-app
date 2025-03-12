import { create } from "zustand";
import { Theme } from "../constants";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
export const useThemeStore = create<ThemeStore>((set) => ({
  theme: localStorage.getItem("chat-theme") as Theme,
  setTheme: (theme: Theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));
