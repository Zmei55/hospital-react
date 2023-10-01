import { createPortal } from "react-dom";
import { ReactNode } from "react";
import { useKeyDown } from "shared";

import { Backdrop, Content } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

interface IModal {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: IModal) => {
  useKeyDown("Escape", onClose);

  const handleBackdropClick: React.MouseEventHandler<
    HTMLDivElement
  > = event => {
    if (event.currentTarget === event.target && onClose) {
      event.preventDefault();
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Backdrop>,
    modalRoot
  );
};
