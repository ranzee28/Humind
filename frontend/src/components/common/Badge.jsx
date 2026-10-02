import React from 'react';
import { cn } from '../../utils/cn';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = "inline-flex items-center font-medium rounded-full select-none";

  const variants = {
    default: "bg-humind-neutral-100 text-humind-neutral-700",
    primary: "bg-humind-primary-50 text-humind-primary-700 border border-humind-primary-200/60",
    success: "bg-humind-wellness-50 text-humind-wellness-700 border border-humind-wellness-300/40",
    sipp: "bg-humind-primary-100/70 text-humind-primary-800 border border-humind-primary-300 font-semibold",
    crisis: "bg-humind-crisis-50 text-humind-crisis-700 border border-humind-crisis-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
    lg: "text-sm px-3 py-1.5 gap-2",
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  );
}
