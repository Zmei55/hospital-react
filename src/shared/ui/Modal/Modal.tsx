import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";
import { useKeyDown } from "shared";

import { Backdrop, Content } from "./Modal.styled";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

interface IModal {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: IModal) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      const clear = async () => {
        await modalRoot.removeChild(el);
      };
      clear();
    };
  });

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
    <Backdrop data-testid="backdrop" onClick={handleBackdropClick}>
      <Content data-testid="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </Content>
    </Backdrop>,
    el
    // modalRoot
  );
};
