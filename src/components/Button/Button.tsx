import { ButtonProps } from "./types";
import "./styles.css";

function Button({ type = "button", name, onClick }: ButtonProps) {
  return (
    <button className="button-component" onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default Button;
