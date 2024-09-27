import { ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  type = "button",
  name,
  onClick,
  isDeleteVariant = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      $isDeleteVariant={isDeleteVariant}
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
