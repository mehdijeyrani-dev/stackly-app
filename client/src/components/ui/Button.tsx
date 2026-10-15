import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "default" | "outline" | "flat" | "link" | "ghost";

type Color =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "info"
  | "success";

type Size =
  | "extra-small"
  | "small"
  | "medium"
  | "large"
  | "extra-large"
  | "full-width"
  | "fit-content"
  | "icon";

type Radius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> {
  children: ReactNode;
  variant?: Variant;
  color?: Color;
  size?: Size;
  radius?: Radius;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-default disabled:cursor-not-allowed disabled:opacity-40 px-4 py-2 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-offset-background";

const variantBaseStyles: Record<Variant, string> = {
  default: "",
  flat: "",
  outline: "border bg-transparent",
  link: "bg-transparent underline-offset-4 hover:underline",
  ghost: "bg-transparent",
};

const colorStyles: Record<Color, Record<Variant, string>> = {
  primary: {
    default:
      "bg-blue-900/10 text-blue-600 hover:bg-blue-900/20 focus-visible:ring-blue-600",
    flat: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border-blue-500/20 text-blue-500 hover:bg-blue-500/15",
    link: "text-blue-500 hover:text-blue-600",
    ghost: "text-blue-500 bg-transparent hover:bg-blue-900/10",
  },
  secondary: {
    default:
      "bg-neutral-700/20 text-white hover:bg-neutral-800 focus-visible:ring-neutral-700",
    flat: "bg-neutral-700 text-white hover:bg-neutral-800 focus-visible:ring-neutral-700",
    outline:
      "border-neutral-700 text-neutral-400 hover:bg-neutral-700/20 hover:text-neutral-50 focus-visible:ring-neutral-700",
    link: "text-neutral-400 hover:text-neutral-50 focus-visible:ring-neutral-700",
    ghost:
      "text-neutral-400 hover:bg-neutral-700/20 hover:text-neutral-50 focus-visible:ring-neutral-700",
  },
  danger: {
    default:
      "bg-rose-900/15 text-rose-500 hover:bg-rose-900/25 focus-visible:ring-rose-500",
    flat: "bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-500",
    outline:
      "border-rose-600/30 text-rose-500 hover:bg-rose-900/15 focus-visible:ring-rose-500",
    link: "text-rose-500 hover:text-rose-600 focus-visible:ring-rose-500",
    ghost: "text-rose-500 hover:bg-rose-900/15 focus-visible:ring-rose-500",
  },
  success: {
    default:
      "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500",
    flat: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500",
    outline:
      "border-green-600 text-green-700 hover:bg-green-50 focus-visible:ring-green-500",
    link: "text-green-600 hover:text-green-700 focus-visible:ring-green-500",
    ghost: "text-green-700 hover:bg-green-50 focus-visible:ring-green-500",
  },
  info: {
    default:
      "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
    flat: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
    outline:
      "border-blue-600 text-blue-700 hover:bg-blue-50 focus-visible:ring-blue-500",
    link: "text-blue-600 hover:text-blue-700 focus-visible:ring-blue-500",
    ghost: "text-blue-700 hover:bg-blue-50 focus-visible:ring-blue-500",
  },
  warning: {
    default:
      "bg-purple-600 text-white hover:bg-purple-700 focus-visible:ring-purple-500",
    flat: "bg-purple-600 text-white hover:bg-purple-700 focus-visible:ring-purple-500",
    outline:
      "border-purple-600 text-purple-700 hover:bg-purple-50 focus-visible:ring-purple-500",
    link: "text-purple-600 hover:text-purple-700 focus-visible:ring-purple-500",
    ghost: "text-purple-700 hover:bg-purple-50 focus-visible:ring-purple-500",
  },
};

const sizeStyles: Record<Size, string> = {
  "extra-small": "px-2 py-1 text-xs",
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
  "extra-large": "px-6 py-4 text-xl",
  "full-width": "w-full",
  "fit-content": "w-fit",
  icon: "size-8 p-1",
};

const radiusStyles: Record<Radius, string> = {
  none: "rounded-none",
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  xxl: "rounded-2xl",
  full: "rounded-full",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      color = "primary",
      size = "medium",
      radius = "md",
      className = "",
      type = "button",
      ...rest
    },
    ref,
  ) => {
    const styles = twMerge(
      baseStyles,
      variantBaseStyles[variant],
      colorStyles[color][variant],
      sizeStyles[size],
      radiusStyles[radius],
      className,
    );

    return (
      <button ref={ref} type={type} className={styles} {...rest}>
        {children}
      </button>
    );
  },
);

export default Button;
