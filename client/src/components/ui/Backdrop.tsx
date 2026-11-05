import { type HTMLAttributes, type ReactNode } from "react";
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
  return (
    <div
      aria-hidden="true"
      className={twMerge(
        "fixed inset-0 z-999 backdrop-blur-[2px] animate-blur-fade-in",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Backdrop;
