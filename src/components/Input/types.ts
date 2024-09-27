import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  id: string;
  name: string;
  type?: HTMLInputTypeAttribute | undefined;
  placeholder: string;
  label?: string;
}
