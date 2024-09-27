import { ModalProps } from "./types";
import "./styles.css";

function Modal({ children, closeModal }: ModalProps) {
  return (
    <div onClick={closeModal} className="modal-wrapper">
      <div className="modal-component">{children}</div>
    </div>
  );
}

export default Modal;
