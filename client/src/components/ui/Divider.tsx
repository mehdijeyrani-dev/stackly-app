import { twMerge } from "tailwind-merge";

interface DividerProps {
  className?: string;
}

const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div
      className={twMerge(
        "w-px h-7 bg-surface-border",
        className,
      )}
    />
  );
};

export default Divider;
