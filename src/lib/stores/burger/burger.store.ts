import { create } from "zustand";
import { BurgerStore } from "./burger.type";

export const useBurgerStore = create<BurgerStore>(set => ({
  open: false,
  setOpen: open => set({ open }),
  toggle: () => set(state => ({ open: !state.open }))
}));