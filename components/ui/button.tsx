import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "ghost" | "destructive";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
    const variants: Record<string, string> = {
      default: "bg-black text-white hover:bg-black/90 shadow-sm",
      secondary: "bg-white text-black border hover:bg-gray-50 shadow-sm",
      ghost: "bg-transparent hover:bg-gray-100",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    };
    return (
      <button ref={ref} className={clsx(base, variants[variant], className)} {...props} />
    );
  }
);
Button.displayName = "Button";
