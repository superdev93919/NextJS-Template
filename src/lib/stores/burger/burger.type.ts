export type BurgerStore = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}