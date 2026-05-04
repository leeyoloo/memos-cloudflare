import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  fullWidth?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ fullWidth, className, ...props }, ref) => {
    const baseClass = "w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100";
    const widthClass = fullWidth ? "w-full" : "";
    return (
      <textarea
        ref={ref}
        className={`${baseClass} ${widthClass} ${className || ""}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
