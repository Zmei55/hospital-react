import { createPortal } from "react-dom";
import { ReactNode, useEffect, useState } from "react";
import { useKeyDown } from "shared";

import { Backdrop, Content } from "./Modal.styled";

const root = document.getElementsByTagName("body")[0];

interface IModal {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: IModal) => {
  const [modalRoot] = useState(document.createElement("div"));

  useEffect(() => {
    root.appendChild(modalRoot);

    return () => {
      root.removeChild(modalRoot);
    };
  }, [modalRoot]);

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
    modalRoot
  );
};
