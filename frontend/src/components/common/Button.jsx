import React from 'react';
import { cn } from '../../utils/cn';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  disabled = false,
  iconLeft: IconLeft,
  iconRight: IconRight,
  type = 'button',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const variants = {
    primary: "bg-humind-primary-500 text-white hover:bg-humind-primary-600 focus:ring-humind-primary-400 shadow-sm hover:shadow",
    secondary: "bg-humind-primary-50 text-humind-primary-700 hover:bg-humind-primary-100 focus:ring-humind-primary-300",
    outline: "border border-humind-neutral-200 text-humind-neutral-700 hover:border-humind-primary-300 hover:text-humind-primary-600 hover:bg-humind-primary-50/50 focus:ring-humind-primary-200",
    ghost: "text-humind-neutral-600 hover:bg-humind-neutral-100 hover:text-humind-neutral-900 focus:ring-humind-neutral-200",
    crisis: "bg-humind-crisis-500 text-white hover:bg-humind-crisis-600 focus:ring-humind-crisis-200 shadow-sm",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
      ) : IconLeft ? (
        <IconLeft className="w-4 h-4 shrink-0" />
      ) : null}

      <span>{children}</span>

      {!isLoading && IconRight && (
        <IconRight className="w-4 h-4 shrink-0" />
      )}
    </button>
  );
}
