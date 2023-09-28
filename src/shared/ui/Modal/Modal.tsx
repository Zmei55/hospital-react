// import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ReactNode } from "react";
import { useKeyDown } from "shared";

import { Backdrop, Content } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

interface IModal {
  // width: string;
  // height: string;
  children: ReactNode;
  onClose: () => void;
}

// export function Modal({ width, height, children, onClose }: IModal) {
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
      {/* <Content style={{ width, height }}>{children}</Content> */}
      <Content>{children}</Content>
    </Backdrop>,
    modalRoot
  );
};
