import { Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";

export type ModalProps = PropsWithChildren & HTMLAttributes<HTMLDivElement> & {
  title: string;

  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};