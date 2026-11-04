import {
  useEffect,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  children: ReactNode;
}

const Backdrop = ({
  isOpen,
  children,
  className = "",
  ...props
}: BackdropProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && !isOpen) {
          setShouldRender(false);
        }
      }}
      className={twMerge(
        "fixed inset-0 z-999 backdrop-blur-[1px]",
        isOpen ? "animate-blur-fade-in" : "animate-blur-fade-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Backdrop;
