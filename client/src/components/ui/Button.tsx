import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "flat" | "solid" | "outline" | "ghost" | "link";

type Color =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "info"
  | "success"
  | "tertiary";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> {
  children: ReactNode;
  variant?: Variant;
  color?: Color;
  size?: Size;
  iconSize?: IconSize;
}

const baseStyles =
  "relative group/button inline-flex shrink-0 items-center justify-center font-medium border border-transparent bg-clip-padding whitespace-nowrap transition-default outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0";

const variantBaseStyles: Record<Variant, string> = {
  flat: "",
  solid: "",
  outline: "",
  ghost: "",
  link: "",
};

const colorStyles: Record<Color, Record<Variant, string>> = {
  primary: {
    flat: "bg-blue-600 hover:bg-blue-700",
    solid:
      "bg-blue-500/10 hover:bg-blue-500/20 border-transparent text-blue-500",
    outline:
      "bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/10 text-blue-500",
    ghost:
      "bg-transparent hover:bg-blue-500/10 border-transparent text-blue-500",
    link: "bg-transparent underline-offset-4 hover:underline border-transparent text-blue-500",
  },
  secondary: {
    flat: "bg-neutral-800 hover:bg-neutral-700/80",
    solid:
      "bg-neutral-700/30 hover:bg-neutral-700/40 border-transparent text-neutral-500 hover:text-neutral-50",
    outline:
      "bg-transparent hover:bg-neutral-700/30 border-neutral-700/30 text-neutral-500 hover:text-neutral-50",
    ghost:
      "bg-transparent hover:bg-neutral-700/30 border-transparent text-neutral-500 hover:text-neutral-50",
    link: "bg-transparent underline-offset-4 hover:underline border-transparent text-neutral-500 hover:text-neutral-50",
  },
  danger: {
    flat: "bg-rose-600 hover:bg-rose-700",
    solid:
      "bg-rose-500/10 hover:bg-rose-500/20 border-transparent text-rose-500",
    outline:
      "bg-transparent hover:bg-rose-500/10 border-rose-500/10 text-rose-500",
    ghost:
      "bg-transparent hover:bg-rose-500/10 border-transparent text-rose-500",
    link: "bg-transparent underline-offset-4 hover:underline border-transparent text-rose-500",
  },
  warning: {
    flat: "bg-yellow-400 hover:bg-yellow-600 text-neutral-800",
    solid:
      "bg-yellow-500/10 hover:bg-yellow-500/20 border-transparent text-yellow-500",
    outline:
      "bg-transparent hover:bg-yellow-500/10 border-yellow-500/10 text-yellow-500",
    ghost:
      "bg-transparent hover:bg-yellow-500/10 border-transparent text-yellow-500",
    link: "bg-transparent underline-offset-4 hover:underline border-transparent text-yellow-500",
  },
  success: {
    flat: "bg-green-400 hover:bg-green-600 text-neutral-800",
    solid:
      "bg-green-500/10 hover:bg-green-500/20 border-transparent text-green-500",
    outline:
      "bg-transparent hover:bg-green-500/10 border-green-500/10 text-green-500",
    ghost:
      "bg-transparent hover:bg-green-500/10 border-transparent text-green-500",
    link: "bg-transparent underline-offset-4 hover:underline border-transparent text-green-500",
  },
  info: {
    flat: "bg-sky-400 hover:bg-sky-600 text-neutral-800",
    solid: "bg-sky-500/10 hover:bg-sky-500/20 border-transparent text-sky-500",
    outline:
      "bg-transparent hover:bg-sky-500/10 border-sky-500/10 text-sky-500",
    ghost: "bg-transparent hover:bg-sky-500/10 border-transparent text-sky-500",
    link: "bg-transparent underline-offset-4 hover:underline border-transparent text-sky-500",
  },
  tertiary: {
    flat: "bg-violet-500 hover:bg-violet-600 text-neutral-800",
    solid:
      "bg-violet-500/10 hover:bg-violet-500/20 border-transparent text-violet-500",
    outline:
      "bg-transparent hover:bg-violet-500/10 border-violet-500/10 text-violet-500",
    ghost:
      "bg-transparent hover:bg-violet-500/10 border-transparent text-violet-500",
    link: "bg-transparent underline-offset-4 hover:underline border-transparent text-violet-500",
  },
};

const sizeStyles: Record<Size, string> = {
  xs: "text-xs/3.5 px-1.5 py-1 rounded-md gap-0.75",
  sm: "text-sm/4 px-2 py-1.25 rounded-md gap-1",
  md: "text-base/5 px-2.25 py-1.5 rounded-lg gap-1.25",
  lg: "text-base/6 px-2.5 py-1.75 rounded-lg gap-1.5",
  xl: "text-lg/6 px-3 py-1.75 rounded-xl gap-1.5",
};

const iconSizeStyles: Record<IconSize, string> = {
  xs: "[&_svg]:size-3 p-1",
  sm: "[&_svg]:size-4 p-1",
  md: "[&_svg]:size-5 p-1",
  lg: "[&_svg]:size-6 p-1",
  xl: "[&_svg]:size-7 p-1.5", 
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "solid",
      color = "primary",
      size = "md",
      iconSize,
      className = "",
      type = "button",
      ...props
    },
    ref,
  ) => {
    const styles = twMerge(
      baseStyles,
      variantBaseStyles[variant],
      colorStyles[color][variant],
      sizeStyles[size],
      iconSize && iconSizeStyles[iconSize],
      className,
    );
    return (
      <button ref={ref} type={type} className={styles} {...props}>
        {children}
      </button>
    );
  },
);

export default Button;
