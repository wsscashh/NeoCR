// src/app/components/button.tsx
import React from "react";

type Props = {
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition";
  const styles =
    variant === "ghost"
      ? "border border-slate-300 text-slate-700 hover:bg-slate-50"
      : "bg-blue-600 text-white hover:bg-blue-700";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${base} ${styles} ${className}`}>{children}</button>
  );
}
