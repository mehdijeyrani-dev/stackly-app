import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal = ({ isOpen, onClose, children, className = "" }: ModalProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!shouldRender || !isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, shouldRender, onClose]);

  if (!shouldRender) return null;

  return createPortal(
    <Backdrop isOpen={shouldRender} onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget && !isOpen) {
            setShouldRender(false);
          }
        }}
        className={twMerge(
          `absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl shadow-xl ${isOpen ? "animate-scale-slide-in" : "animate-scale-slide-out"}`,
          className,
        )}
      >
        {children}
      </div>
    </Backdrop>,
    document.body,
  );
};

export default Modal;
