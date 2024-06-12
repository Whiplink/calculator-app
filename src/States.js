import { create } from 'zustand';

const useScreen = create((set) => ({
  screen: '',
  addToScreen: (p) =>
    set((state) => ({
      screen: state.screen + p,
    })),
  deleteLast: () => set((state) => ({ screen: state.screen.slice(0, -1) })),
  clearScreen: () => set({ screen: '' }),
}));

const useTheme = create((set) => ({
  theme: 1,
  changeTheme: (p) => set({ theme: p }),
}));

export { useScreen, useTheme };
