import * as React from "react";
import clsx from "clsx";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          "w-full rounded-xl border px-3 py-2 text-sm shadow-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-black/20",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
