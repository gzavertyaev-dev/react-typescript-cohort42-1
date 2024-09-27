export type ButtonTypes = "submit" | "reset" | "button" | undefined;

export interface ButtonProps {
  type?: ButtonTypes;
  name: string;
  onClick: () => void;
  isDeleteVariant?: boolean;
}
