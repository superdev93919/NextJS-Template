import { Dispatch, SetStateAction } from "react";

export type TopbarDropzoneProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}